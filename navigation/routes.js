import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardScreen from "../screens/onboard/OnboardScreen";
import HomeScreen from "../screens/onboard/HomeScreen";

const OnboardStack = createStackNavigator();

const Onboard = () => {
  return (
    <NavigationContainer initialRouteName="OnboardScreen">
      <OnboardStack.Navigator>
        <OnboardStack.Screen
          name="OnboardScreen"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <OnboardStack.Screen name="HomeScreen" component={HomeScreen} />
      </OnboardStack.Navigator>
    </NavigationContainer>
  );
};

export default Onboard;
