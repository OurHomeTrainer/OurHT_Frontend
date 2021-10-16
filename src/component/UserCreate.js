import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import jQuery from 'jquery'

const UserCreate = ({match, history}) => {

    let userId = match.params.id
    let [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [userId])
    
    let getUser = async () => {
        if (userId == 'new')
            return
    }
    
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

    // Api Post요청 통해 유저 생성
    let createUser = async () => {
        fetch(`/api/users/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken"),
                "Accept": "application/json",
            },
            body: JSON.stringify(user)
       
        })
        console.log(user);
    }

    return (
        <div>
            <div> User Create </div>
            <input onChange={(e) => {
                setUser(user => e.target.value)
                console.log(e.target.value);
                }
            }/> 
            {/* <input onChange={(e) => {
                setUser(age => e.target.value)
                console.log(e.target.value);
                }
            }/>  */}
            <Link to={`/users/`}>
                <button onClick={createUser}> Create User </button>
            </Link>
        </div>
    )
}

export default UserCreate