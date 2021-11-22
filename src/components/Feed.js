import React , { useState , useEffect, useContext } from 'react';
import jQuery, { data } from 'jquery';

function Feed() {

//     const [hero, setHero] = useState(null);
//     const [feeds,setFeed]=useState([]);
 
//     useEffect(() => {
//         getHero(props.match.params.id);
//     }, []);
    
//   const getHero = async (id) => {
//     let response = await api.get(`/api/user/hero/${id}`);
//     console.log(response);
 
//     if (response.data) {
//       setHero(response.data);
//     }
//   }




//   useEffect(() => {
//     async function feedTest() {
//         fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?username=quad&date=2021-11-15T08:50:05.000Z`, {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': getCookie("csrftoken"),
//                 "Accept": "application/json",
//             },
//         })
//         .then((response) => (response.json()))
//         .then((data) => setFeed(data))
//     }
//     feedTest();
    
//   }, [data]);



// function getCookie(name) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         var cookies = document.cookie.split(';');
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = jQuery.trim(cookies[i]);
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// };







const [feed,setFeed]=useState([]);
 

    useEffect(() => {
        async function feedTest() {
            fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?exercise_pk=1&motion_index=4`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie("csrftoken"),
                    "Accept": "application/json",
                },

            
            })
            .then((response) => (response.json()))
            //.then((data)=> console.log(data))
            .then((data) => setFeed(data))
            //.then((responseData) => setFeed(responseData[0]))
            //.then((responseData) => console.log(responseData))
            //.then((responseData) => {setCheck(responseData[0].checklist);})
            //.then((responseData) => {setPhoto(responseData[0].photo);})
        }
        feedTest();
        
      }, []);



    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };


    


    return (
        <div>
        <h1>Feeeed page</h1>
        <img src={feed.photo} ></img>
        <h2>{feed.count_number}</h2>
        


        </div>

    );
}
export default Feed;