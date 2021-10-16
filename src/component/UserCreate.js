import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserCreate = ({match, history}) => {

    let userId = match.params.id
    let [user, setUser] = useState(null)
    // let [user, age, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [userId])
    
    let getUser = async () => {
        if (userId == 'new')
            return
    }

    // Api Post요청 통해 유저 생성
    let createUser = async () => {
        fetch(`/api/users/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                //'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(user)
            /*
            body: JSON.stringify({
                "user":user,
                "age":age,
            })*/        
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