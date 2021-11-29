
import React, { createContext, useState, useContext } from "react";

const Context = createContext()

export function UserContextProvider({ children }) {
  const [user_pk, setUserpk] = useState(undefined)
  const [exercise_pk, setExercisepk] = useState('999')
  
  return (
    //변수명.Provider 문법으로 그 범위 안에있는 컴포넌트한테 값을 공유할 수 있음
    //value값에 전송할 props 넣기 속성명(value)는 임의변경 불가
    
    <Context.Provider
      value={{
        user_pk,
        setUserpk,
        exercise_pk,
        setExercisepk,
      }}
    >
      {children}
    </Context.Provider>
  )
}

//이걸 이용해서 value에 있는 값에 접근 할 수 있다.
//예를들어 const {user} = useUserContext(); 를 하면 user상태값을 빼올 수 있음
export function useUserContext() {
  return useContext(Context)
}