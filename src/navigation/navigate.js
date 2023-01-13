import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { SCREENS } from "../constants/screens";
import PhotoScreen from "../screens/Menu";
import { Expenses } from "../screens/Expenses";
import { Login } from "../screens/Login";
import { Menu } from "../screens/Menu";
import { Investment } from "../screens/Investment";
import { ProjectsComparison } from '../screens/ProjectsComparison'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};
function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={SCREENS.Login}
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#a2d2ff",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name={SCREENS.Menu}
          component={Menu}
        />
        <Stack.Screen
          name={SCREENS.Expenses}
          component={Expenses}
          options={{
            title: "Expenses",
          }}
        />
        <Stack.Screen
          name={SCREENS.Investment}
          component={Investment}
          options={{
            title: "Investment",
          }}
        />
        <Stack.Screen
          name={SCREENS.ProjectsComparison}
          component={ProjectsComparison}
          options={{
            title: "Results",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;
