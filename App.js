import { createSwitchNavigator,createAppContainer} from 'react-navigation'
import signup from './component/signup';
import Main from './component/Main';
import Login from './component/Login';
import Loading from './component/Loading';
import Logout from './component/Logout';

const firebase = require("firebase");
 // This code is for to attach the firebase with react-native project
 var config = {
  apiKey: "AIzaSyAvo-92GW0qyvdEvG0JKfRrwHQK10pFzpc",
  authDomain: "reactnativedatabase-d1a35.firebaseapp.com",
  databaseURL: "https://reactnativedatabase-d1a35.firebaseio.com",
  projectId: "reactnativedatabase-d1a35",
  storageBucket: "reactnativedatabase-d1a35.appspot.com",
  messagingSenderId: "540828659804"
};
firebase.initializeApp(config);
 
    console.disableYellowBox = false;

// create our app's navigation stack
export default createAppContainer(createSwitchNavigator(
  { 
   signup:signup,
   Main:Main,
   Login:Login,    
   Loading:Loading,
   Logout:Logout,
  },
  {
   initialRouteName: 'Loading'
  }
));

