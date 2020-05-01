import { createAppContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import PrincipalPayTab from '../../components/PrincipalPayTab';
import LocalPayTab from '../../components/LocalPayTab';

const TabNavigator = createMaterialTopTabNavigator(
  {
    PrincipalPayTab: {
      screen: PrincipalPayTab
    },
    LocalPayTab: {
      screen: LocalPayTab
    }
  },
  {
      tabBarOptions: {
      activeTintColor: "#1BA1F3",
      inactiveTintColor: "#000"
    },
    initialRouteName: "Tweets"
  }
);

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
