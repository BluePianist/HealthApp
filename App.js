import React from 'react'
import { View, Image, Scrollview, Text} from 'react-native'
import './Components/Dashboard.component'
import Dashboard from './Components/Dashboard.component';
import Restaurant from './Components/Restaurant.component';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// second commit
const RootStack = createStackNavigator(
  {
    Dashboard: Dashboard,
    Restaurant: Restaurant,
},
{
  initialRouteName:'Dashboard'
}
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {

  render() {
    return(
      <AppContainer />
    )
  }
}