import React, { useState } from "react";

import PodBox from "pod-box-sdk";

export const Landing = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState();

  const fetchUserInfo = async () => {
    const userInfo = await PodBox.user.getInfo();
    setUser(userInfo);
  };

  return (
    <div>
      <h1> Pod box Landing page</h1>
      <button
        onClick={() => {
          setData(PodBox.getStoredData());
        }}
      >
        show all stored data
      </button>
      <button onClick={fetchUserInfo}>show user infos</button>

      <div>DATA:{JSON.stringify(data)}</div>
      <hr />
      <div>USER:{JSON.stringify(user)}</div>
    </div>
  );
};
