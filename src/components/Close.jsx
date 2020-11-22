import React, { useState } from "react";
import PodBox from "pod-box-sdk";

export const Close = () => {
  const [closeMode, setCloseMode] = useState("");
  const [closeMessage, setCloseMessage] = useState("");
  const [closeAction, setCloseAction] = useState("");

  function handleClose() {
    PodBox.handleClose({ closeMode, closeMessage, closeAction });
  }

  return (
    <div>
      <label htmlFor="mode">closeMode</label>
      <input
        value={closeMode}
        onChange={(e) => {
          setCloseMode(e.target.value);
        }}
        name="mode"
      />
      <br />
      <br />
      <label htmlFor="message">closeMessage</label>
      <input
        value={closeMessage}
        onChange={(e) => {
          setCloseMessage(e.target.value);
        }}
        name="message"
      />
      <br />
      <br />
      <label htmlFor="action">closeAction</label>
      <input
        value={closeAction}
        onChange={(e) => {
          setCloseAction(e.target.value);
        }}
        name="action"
      />

      <br />
      <br />

      <button onClick={handleClose}>انجام خروج</button>
    </div>
  );
};
