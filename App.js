import React from 'react'
import { View, Image, Scrollview, Text} from 'react-native'
import './Components/Dashboard.component'
import Dashboard from './Components/Dashboard.component';
import Restaurant from './Components/Restaurant.component';
import Hotel from './Components/Hotels.component';
import Activities from './Components/Activities.component';
import HotSpots from './Components/HotSpots.component';
import GetUserList from './Components/GetUserList.component';
import { createAppContainer } from 'react-navigation';
import { fromLeft, fromRight } from 'react-navigation-transitions';
import { createStackNavigator } from 'react-navigation-stack';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk'

// Create the routes for all the screens
const RootStack = createStackNavigator(
  {
    Dashboard: Dashboard,
    Restaurant: Restaurant,
    Hotel: Hotel,
    Activities: Activities,
    HotSpots: HotSpots,
    GetUserList: GetUserList,
},
{
  initialRouteName:'Dashboard',
  transitionConfig: () => fromRight(),
}
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      client:undefined
    }
  }
  componentDidMount(){
    this._loadClient();
  }

  // this function authenticate the user by initialize the default client of Mongodb Stitch
  _loadClient(){
    if(!Stitch.hasAppClient('sri-lankapp-wyakx')){
      Stitch.initializeDefaultAppClient('sri-lankapp-wyakx').then(client => {
        this.setState({ client })
      })
    } else {
      this.setState({
        client: Stitch.defaultAppClient
      })
    }
  }

  render() {
    return(
      <AppContainer />
    )
  }
}