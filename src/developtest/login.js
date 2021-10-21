import { useRef, useCallback } from "react";
import jQuery, { data } from "jquery";

function login() {
    
    let username;
    let userpassword;
    let result;

    // CSRF Token 처리 함수, POST 요청시 반드시 필요함! 
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
    }

    async function login(){
        fetch(`/api/users/login/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken"),
                "Accept": "application/json",
            },
            body: JSON.stringify({
               'username': username,
               'password': userpassword
            })
        })
        .then(response => result = response.json())
        .then(console.log(result))
        .then(console.log("fuck"))
    }

    return (
        <div>
            <input onChange={(e) => {
                username = e.target.value;
                console.log("username" + username);
                }
            }/> 
            <input onChange={(e) => {
                userpassword = e.target.value;
                console.log(e.target.value);
                }
            }/>
            <button onClick={(result) = login}> login </button>
            <span> {result} </span>
        </div>
    )
}

export default login;