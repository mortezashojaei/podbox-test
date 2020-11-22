import React, { useEffect } from "react";
import PodBox from "pod-box-sdk";

export const InitPage = () => {
  useEffect(() => {
    PodBox.init({
      clientId: "17892023x5b324db89637f1b38a2eb6de",
      redirectUri: "http://p.houp.ir/authenticating",
      scope: "profile",
    });
  }, []);

  return <h1>Init Page . . .</h1>;
};
