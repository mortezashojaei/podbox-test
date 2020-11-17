import React from "react";
import { auth } from "podauth";

export const Login = () => {
  function login() {
    auth({
      clientId: "17892023x5b324db89637f1b38a2eb6de", //Business client id
      ssoBaseUrl: "https://accounts.pod.ir/oauth2", //sso Base Url
      redirectUri: "https://google.com", //Default {protocol}://{domain} of current url
      timeRemainingTimeout: 90, //Remaining time before expiration to refresh token, Default 90 seconds before expiration
      retryTimeout: 3000, //Retry timeout after a fail catch
      cookieTimeout: 365, //Cookie timeout for refresh token
      secure: false,
      scope: "profile", //Login scope: profile|email|address|activity|legal،|phone
      onRetry(retry) {
        //Will fire when getting toke failed or canceled {retry} is custom retry function
      },
      onError() {
        //Will fire when an error happened
        return true; //will go to login page if you return true except will do nothing
      },
      onNewToken(token) {
        console.log(token);
        //Do your stuff
      },
      redirectTrigger() {
        //Will fire when auth will be in sign out or token generation faze
        //When you define this function needs to return true for default redirection to login page
        //If you dont need to default redirection you can return false or nothing
        return true;
      },
    });
  }

  return <button onClick={login}>LOGIN</button>;
};
