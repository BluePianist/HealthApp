import React from 'react';
import { View, Image, Text, ScrollView, StatusBar, Animated, Dimensions, SafeAreaView , Easing, Platform, TouchableOpacity, YellowBox} from 'react-native';
import ds from './Style/Dashboard_style.js';
import Carousel from 'react-native-snap-carousel';
import Icon from './Icon'
import Restaurant from './Restaurant.component'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
// import ViewPager from '@react-native-community/viewpager';


console.disableYellowBox = true;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp (percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

export default class Dashboard extends React.Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            name: "Thivya",
            yValue: new Animated.Value(0),
        }
    }

    handleScroll(event:{ nativeEvent: { contentOffset: { x: number, y: number } }}){
        const {y} = event.nativeEvent.contentOffset;
        // console.log(y);
        if(y>715){
            return(<StatusBar backgroundColor="transparent" translucent={true} barStyle={"dark-content"} />)
        }
        // this.refs.scrollView.scrollTo({x: 0, y: 200, animated: false});
        // setTimeout(() => {
        //     this._scrollView.scrollTo({x: 0, y: 0, animated: true});
        // }, 0); 

    }
    // componentDidMount()){
        
    // }
    handlePress(){
        alert('yes');
            // Animated.timing(this.state.yValue,{
                //     toValue:200,
                //     duration: 2000,
                //     easing: Easing.linear,
                // }).start();
                
        // this._press();
        
        // console.log(y);
        // alert('yes' + y);
    }
    scrollToInitialPosition = () => {
        setTimeout(() => {
            this.scrollViewRef.scrollTo({ y: hp(27), animated:true });
        }, 100); 
      }
  
    render(){
        return (
            <SafeAreaView style={ds.container}>
                {/* <Router> */}
                <StatusBar backgroundColor="transparent" translucent={true} barStyle={"light-content"} />
                <Image source={require('./Images/road-trip-with-raj-0uI8LANIe0A-unsplash.jpg')} style={ds.backgroundImage}/>
                <Text style={ds.Title}>Sri-Lanka</Text>
                <Text style={ds.Subtitle}>Start your journey with us</Text>
                {/* <Animated.View style={[ds.animatedView, {bottom: this.state.yValue}]}> */}

                    <ScrollView style={[ds.Scrollable, ]} showsHorizontalScrollIndicator={false} id="Scrollable" onScroll={this.handleScroll} ref={(ref) => { this.scrollViewRef = ref; }} onLayout={this.scrollToInitialPosition}>
                            <View style={ds.panel}>
                                <Text style={ds.Hello}>Hello {this.state.name}, what are you looking for ?</Text>
                                <View style={ds.boxContainerHorizontal}>
                                    {/* <Text style={ds.panelTitle}>Travel tips</Text> */}
                                    <TouchableOpacity activeOpacity={0.7} style={ds.box1} onPress={() => this.props.navigation.navigate('Restaurant')}>
                                        <Image source={require('./Images/DRYpypwUQAEfMNX.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.boxText}>Restaurants</Text>
                                        <View style={ds.iconContainer}>
                                            <Icon name="Food" fill="#ffffff" viewBox="0 0 100 100" height='28' width='28'/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7} style={ds.box2} onPress={() => this.props.navigation.navigate('Hotel')}>
                                        <Image source={require('./Images/laya-safari.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.boxText}>Hotels</Text>
                                        <View style={ds.iconContainer}>
                                            <Icon name="hotel" fill="#ffffff" viewBox="0 0 100 100" height='28' width='28'/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={ds.box3} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Activities')}>
                                    <Image source={require('./Images/Sigiriya_1024x1024.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.boxText}>Activities</Text>
                                        <View style={ds.iconContainer}>
                                            <Icon name="activities" fill="#ffffff" viewBox="0 0 100 100" height='28' width='28'/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={ds.box4} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('HotSpots')}>
                                        <Image source={require('./Images/nuwara-eliya.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.boxText}>Hot Spots</Text>
                                        <View style={ds.iconContainer}>
                                            <Icon name="monuments" fill="#ffffff" viewBox="0 0 100 100" height='28' width='28'/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={ds.panelTitle}>Find experience</Text>
                                <ScrollView style={ds.horizontalScrollable} horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={ds.horizontalContainer}>
                                        <TouchableOpacity style={ds.bigBox}onPress={() => this.props.navigation.navigate('GetUserList')}>
                                            <Image source={require('./Images/adam-marikar-3sJIC7dKcpQ-unsplash.jpg')} style={ds.boxImage}/>
                                            <Text style={ds.bigBoxText}>Temples</Text>
                                        </TouchableOpacity>
                                        <View style={ds.bigBox}>
                                            <Image source={require('./Images/joshua-newton-LxQe7xNGHJA-unsplash.jpg')}style={ds.boxImage}/>
                                            <Text style={ds.bigBoxText}>Forests</Text>
                                        </View>
                                        <View style={ds.bigBox}>
                                            <Image source={require('./Images/tomas-malik-6BQyHtYSb5E-unsplash.jpg')} style={ds.boxImage}/>
                                            <Text style={ds.bigBoxText}>Beaches</Text>
                                        </View>
                                        <View style={ds.bigBox}>
                                            <Image source={require('./Images/Sri-Lanka-river-iStock-5059213521.jpg')} style={ds.boxImage}/>
                                            <Text style={ds.bigBoxText}>Rivers</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                                <Text style={{textAlign:'center', padding:10}}>© copyright Appupeze</Text>
                            </View>
                    </ScrollView>
                        
            </SafeAreaView>
        )
 
    }
}