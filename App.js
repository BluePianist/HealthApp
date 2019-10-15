import React from 'react'
import { View, Image, Scrollview, Text} from 'react-native'
import './Components/Dashboard.component'
import Dashboard from './Components/Dashboard.component';

export default class App extends React.Component {

  render() {
    return(
      <View>
        <Dashboard/>
      </View>
    )
  }
}