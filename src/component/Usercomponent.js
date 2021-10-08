import React, { useState, useEffect } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const Usercomponent = (history) => {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    // Api 이용해서 User들의 목록 받아오는 함수
    let getUsers = async () => {
        
        let response = await fetch(`/api/users/`)
        let data = await response.json()
        setUsers(data)
    }

    return (
        <div>
            <div> Usercomponent </div>
            <div>
                <button onClick={getUsers}> Get User </button>
                {users.map((user,index) => (
                    <div> {user.name} / {index} </div>
                ))}
            </div>
            <Link to={`/`}>
                <button> 이전 페이지로 </button>
            </Link>
        </div>
    )
}

export default Usercomponent