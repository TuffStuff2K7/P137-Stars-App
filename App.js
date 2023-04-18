import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailScreen from "./screens/Details";
import HomeScreen from "./screens/Home";

const appStackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
    Details: { screen: DetailScreen },
  },
  { initialRouteName: "Home" },
);

const AppContainer = createAppContainer(appStackNavigator);

export default function App() {
  return <AppContainer />;
}
