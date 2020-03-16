import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../containers/Login";
import Register from "../containers/Register.js";

const authStack = createStackNavigator(
  {
    login: Login,
    register: Register
  },
  { headerMode: "none" }
);

export default createAppContainer(authStack);
