import React from 'react';
import { View, Image, Text, ScrollView, StatusBar, Animated, Dimensions, SafeAreaView } from 'react-native';
import ds from './Style/Dashboard_style.js';
import Carousel from 'react-native-snap-carousel';
import Icon from './Icon'
import Swiper from 'react-native-swiper'
// import ViewPagerAndroid from 'react-native-viewpager'
import ViewPager from '@react-native-community/viewpager';



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

    constructor(props){
        super(props);
        this.state = {
            name: "Thivya",
        }
    }

    handleScroll(event:{ nativeEvent: { contentOffset: { x: number, y: number }, contentSize: { height: number, width: number } }}){
        const {x} = event.nativeEvent.contentOffset;
        console.log(x);

    }
    componentDidMount(){
        // this.refs.scrollView.scrollTo({x: 200, y: 0, animated: false});
    }


    render(){
        return (
            <SafeAreaView style={ds.container}>
                <StatusBar backgroundColor="transparent" translucent={true} barStyle={"light-content"} />
                <Image source={require('./Images/road-trip-with-raj-0uI8LANIe0A-unsplash.jpg')} style={ds.backgroundImage}/>
                <Text style={ds.Title}>Sri-Lanka</Text>
                <Text style={ds.Subtitle}>Start your journey with us</Text>
                <ScrollView style={ds.Scrollable} showsHorizontalScrollIndicator={false}>
                        <View style={ds.panel}>
                            <Text style={ds.Hello}>Hello {this.state.name}, what are you looking for ?</Text>
                            <View style={ds.boxContainerHorizontal}>
                                <Text style={ds.panelTitle}>Travel tips</Text>
                                <View style={ds.box1}>
                                    <View style={ds.circle}/>
                                    <Text style={ds.boxText}>Restaurant</Text>
                                    <View style={ds.iconContainer}>
                                        <Icon name="Food" fill="#ffffff" viewBox="0 0 100 100" height='64' width='64'/>
                                </View>
                                </View>
                                <View style={ds.box2}>
                                    <View style={ds.circle}/>
                                    <Text style={ds.boxText}>Hotels</Text>
                                    <View style={ds.iconContainer}>
                                        <Icon name="hotel" fill="#ffffff" viewBox="0 0 100 100" height='64' width='64'/>
                                    </View>
                                </View>
                                <View style={ds.box3}>
                                    <View style={ds.circle}/>
                                    <Text style={ds.boxText}>Activities</Text>
                                    <View style={ds.iconContainer}>
                                        <Icon name="activities" fill="#ffffff" viewBox="0 0 100 100" height='64' width='64'/>
                                    </View>
                                </View>
                                <View style={ds.box4}>
                                    <View style={ds.circle}/>
                                    <Text style={ds.boxText}>Hot Spots</Text>
                                    <View style={ds.iconContainer}>
                                        <Icon name="monuments" fill="#ffffff" viewBox="0 0 100 100" height='64' width='64'/>
                                    </View>
                                </View>
                            </View>
                            <Text style={ds.panelTitle}>Find experience</Text>
                            <ScrollView style={ds.horizontalScrollable} horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={ds.horizontalContainer}>
                                    <View style={ds.bigBox}>
                                        <Image source={require('./Images/adam-marikar-3sJIC7dKcpQ-unsplash.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.bigBoxText}>Temples</Text>
                                    </View>
                                    <View style={ds.bigBox}>
                                        
                                    </View>
                                    <View style={ds.bigBox}></View>
                                    <View style={ds.bigBox}></View>
                                </View>
                            </ScrollView>
                            <Text style={{textAlign:'center', padding:10}}>© copyright Appupeze</Text>
                        </View>
                </ScrollView>
                        
            </SafeAreaView>
        )
 
    }
}