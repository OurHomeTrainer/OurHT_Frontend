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
function getUserSquat(파라미터) {
  axios
    .get("http://127.0.0.1:8000/apis/users/getuserexercise?username=wnsgu")
    .then((Response) => {
      // squatEvents = [...Response.data]; //deep copy
      for (var i = 0; i < Response.data.length; i++) {
        squatEvents.push({
          title: Response.data[i].created,
          start: Response.data[i].created,
          end: Response.data[i].created,
          exercise_pk: Response.data[i].id,
        });
      }
      console.log("squatEvents:");
      console.log(squatEvents);

      let newDay = {
        title: Response.data[0].created,
        allDay: true,
        start: Response.data[0].created,
        end: Response.data[0].created,
      };

      // for (var i = 0; i < squatArray.length; i++) {

      // }

      파라미터();

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
  var [text, setText] = useState("오늘의 밥");
  console.log("calendar by james");

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
  console.log("squatEventsState:");
  console.log(sqautEventsState);

  useEffect(() => {
    getUserSquat(updateSquat);
  }, []);
  // getUserSquat(updateText);
  function updateText() {
    setText("내일의 밥");
    console.log("내일의 밥 -> state변경");
  }
  function updateSquat() {
    setSqautEventsState(squatEvents);
    console.log("업데이트 스쿼트 스테이트");
  }

  function onSelectEvent눌렀을때함수(event) {
    console.log(event.title, event.exercise_pk);
    const user_exercise_pk = event.exercise_pk;
    console.log("눌렀어요!!!");
    // window.location.replace("/result/feed/" + user_exercise_pk);
    window.location.href = "/result/feed/" + user_exercise_pk;
  }

  return (
    <div className="App">
      {text}
      <Calendar
        localizer={localizer}
        events={sqautEventsState} //원래는 {events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={onSelectEvent눌렀을때함수}
      />
    </div>
  );
}

export default CalendarByJames;
