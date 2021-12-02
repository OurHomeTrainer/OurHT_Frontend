import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

import jQuery, { data } from "jquery"; //feed에서 들고옴

import axios from "axios"; //api를 통해 값을 받기 위해 사용
import { propTypes } from "react-bootstrap/esm/Image";
import { WindowsBalloon } from "node-notifier";

/// google calendar chart를 위해서
import Chart from "react-google-charts";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "스쿼트1회",
    allDay: true,
    start: new Date(2021, 10, 27),
    end: new Date(2021, 10, 27),
  },
  {
    title: "스쿼트2회",
    start: new Date(2021, 10, 28),
    end: new Date(2021, 10, 28),
  },
];

var squatEvents = [];
var squatEventsForGoogle = [
  [
    { type: "date", id: "Date" },
    { type: "number", id: "Won/Loss" },
  ],
];

function getUserSquat(파라미터, user_pk) {
  let url = "http://127.0.0.1:8000/apis/users/getuserexercise?userid=";
  url += user_pk;
  console.log(url);
  axios
    .get(url)
    .then((Response) => {
      //console.log(Response.data);
      // squatEvents = [...Response.data]; //deep copy
      for (var i = 0; i < Response.data.length; i++) {
        squatEvents.push({
          title: "스쿼트 " + Response.data[i].squat_count + "회",
          start: Response.data[i].created,
          end: Response.data[i].created,
          exercise_pk: Response.data[i].id,
          squat_count: Response.data[i].squat_count,
        });
      }
      for (var i = 0; i < Response.data.length; i++) {
        //console.log(Response.data[i].created);
        squatEventsForGoogle.push([
          new Date(Response.data[i].created),
          Response.data[i].squat_count,
        ]);
      }

      console.log("squatEvents:");
      console.log(squatEvents);

      // for (var i = 0; i < squatArray.length; i++) {

      // }

      파라미터();
      //squatEvents.splice(0, squatEvents.length);
      // events.push(newDay);
    })
    .catch((Error) => {
      console.log(Error);
    });
  //   console.log(events[0]);
  //   console.log(events.length);

  // sqautEvents.push({ title: "", start: "", end: "" });
}

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function CalendarByJames() {
  // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  // const [allEvents, setAllEvents] = useState(events);
  var [text, setText] = useState();
  //console.log("calendar by james");

  let user_pk_temp = localStorage.getItem("user_pk");

  var [sqautEventsState, setSqautEventsState] = useState([
    {
      title: "스쿼트19회",
      allDay: true,
      start: new Date(2021, 10, 27),
      end: new Date(2021, 10, 27),
      pk: "1",
    },
    {
      title: "스쿼트2회",
      start: new Date(2021, 10, 28),
      end: new Date(2021, 10, 28),
    },
  ]);
  //console.log("squatEventsState:");
  //console.log(sqautEventsState);

  var [squatEventsForGoogleState, setSquatEventsForGoogleState] = useState([]);

  useEffect(() => {
    getUserSquat(updateSquat, user_pk_temp);
  }, []);
  // getUserSquat(updateText);
  function updateText() {
    setText("내일의 밥");
    console.log("내일의 밥 -> state변경");
  }
  function updateSquat() {
    setSqautEventsState(squatEvents);
    //console.log(squatEvents);
    setSquatEventsForGoogleState(squatEventsForGoogle);
    console.log("업데이트 스쿼트 스테이트");
    //console.log(squatEventsForGoogle[1]);
  }

  function onSelectEvent눌렀을때함수(event) {
    console.log(event.title, event.exercise_pk);
    const user_exercise_pk = event.exercise_pk;
    console.log("눌렀어요!!!");
    // window.location.replace("/result/feed/" + user_exercise_pk);
    window.location.href = "/result/feed/" + user_exercise_pk;
  }

  const eventsData = [
    [
      { type: "date", id: "Date" },
      { type: "number", id: "Won/Loss" },
    ],
    [new Date("2021-01-01T13:38:02+09:00"), 1],
    [new Date("2021-08-25T13:38:02+09:00"), 38024],
    [new Date("2021-09-25T13:38:02+09:00"), 38024],
  ];
  //console.log(eventsData);

  return (
    <div id="ImageLetterColor">
      {text}
      <Calendar
        localizer={localizer}
        events={sqautEventsState} //원래는 {events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={onSelectEvent눌렀을때함수}
      />
      <Chart
        width={1000}
        height={500}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={squatEventsForGoogleState}
        options={{
          title: "Squat of Year!",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default CalendarByJames;
