import React, { createContext, useState } from 'react';
// Context에서 관리해줄 상태값과 메소드들을 정의합니다.
const UserContext = createContext({
  state: {
    userInfo: {},
    swiperIndex: 0
  },
  actions: {
    setUserInfo: () => {},
    setSwiperIndex: () => {}
  }
});
// Provider를 rendering하면서 상태값과 메소드들을 전달합니다.
const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [swiperIndex, setSwiperIndex] = useState(0);
const value = {
    state: { userInfo, swiperIndex },
    actions: { setUserInfo, setSwiperIndex }
  };
return (
    <UserContext.Provider value={[value.state, value.actions]}>
      {children}
    </UserContext.Provider>
  );
};
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
export default UserContext;