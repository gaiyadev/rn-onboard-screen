import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ChangePassword from "../../screens/drawer/ChangePassword";

const Drawer = createDrawerNavigator();
const LeftDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ChangePassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default LeftDrawer;
