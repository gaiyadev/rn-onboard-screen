import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardScreen from "../screens/onboard/OnboardScreen";
import BottomTabs from "../navigation/tabs/BottomTabs";
import { FONTS } from "../constants";

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
        <OnboardStack.Screen
          name="WelcomeScreen"
          component={BottomTabs}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            // headerLeft: () => (
            //   <Button
            //     onPress={() => {
            //       // navigation.toggleDrawer();
            //     }}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          })}
        />
      </OnboardStack.Navigator>
    </NavigationContainer>
  );
};

export default Onboard;
