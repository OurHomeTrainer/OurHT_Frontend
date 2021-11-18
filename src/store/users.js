import React, { createContext } from "react";

export const UserContext = createContext();

const UserStore = (props) => {

    const users = {
        pk: "pk1"
    };

    return(
        <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
    );

};
export default UserStore;