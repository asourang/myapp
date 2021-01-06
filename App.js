import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login:LoginScreen,
   Landing:LandingScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "MyApp"
    }
  }
);

export default createAppContainer(navigator);
