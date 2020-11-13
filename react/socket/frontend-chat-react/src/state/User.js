import React, { createContext, useState } from "react";

export const UserContext = createContext({});

function User(props) {
  const [user, setUser] = useState({
    name: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default User;
