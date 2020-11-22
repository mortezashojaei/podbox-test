import React, { useEffect } from "react";

import PodBox from "pod-box-sdk";
import { useHistory } from "react-router-dom";

export const Authentication = () => {
  const history = useHistory();
  useEffect(() => {
    PodBox.auth.handleAuthenticatingPage(
      () => {
        history.push("/");
      },
      () => {
        alert("error");
      }
    );
  }, []);
  return <div>Loading . . .</div>;
};
