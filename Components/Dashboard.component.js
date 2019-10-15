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
                    <View key="1">
                        <StatusBar backgroundColor="transparent" translucent={true} barStyle={"light-content"} />
                        <Image source={require('./Images/road-trip-with-raj-0uI8LANIe0A-unsplash.jpg')} style={ds.backgroundImage}/>
                    <Text style={ds.Title}>Sri-Lanka</Text>
                    <Text style={ds.Subtitle}>Start your journey with us</Text>
                    </View>
                <ScrollView style={ds.Scrollable} showsHorizontalScrollIndicator={false}>
                    <View style={ds.VerticalContainer}>
                    </View>
                        <View style={ds.panel}>
                            <View style={ds.boxContainerHorizontal}>
                                <Text style={ds.panelTitle}>Travel tips</Text>
                                <View style={ds.box1}>
                                    <Text style={ds.boxText}>Restaurant</Text>
                                    <View style={ds.iconContainer}>
                                        <Icon name="User" fill="#ffffff"/>
                                    </View>
                                </View>
                                <View style={ds.box2}></View>
                                <View style={ds.box3}></View>
                                <View style={ds.box4}></View>
                            </View>
                        </View>
                </ScrollView>
                        
            </SafeAreaView>
        )
 
    }
}