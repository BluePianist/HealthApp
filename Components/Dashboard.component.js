import React from 'react';
import { View, Image, Text, ScrollView, StatusBar, Animated, Dimensions, SafeAreaView , Easing, Platform, TouchableOpacity, YellowBox} from 'react-native';
import ds from './Style/Dashboard_style.js';
import Carousel from 'react-native-snap-carousel';
import Icon from './Icon'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const ListResto = [
    {
        title: 'Nuga Gama',
        image:require('./Images/043_nugaGamaNight-JPG.jpg'),
        address: '77, Galle Road, Colombo 3, Colombo',
        info: 'Traditional',
        rate: 4.5,
    },
    {
        title: 'Kaema Sutra',
        image:require('./Images/DRYpypwUQAEfMNX.jpg'),
        address: '1, Galle Face, Colombo 00200 ',
        info: 'Traditional',
        rate: 4.9,
    },
    {
        title: 'Ministry of Crab',
        image:require('./Images/Ministry-of-Crab.jpg'),
        address: '04 Hospital St, Colombo 00100',
        info: 'Fish & See Food',
        rate: 4.7,
    },
    {
        title: 'Upali\'s',
        image:require('./Images/Upalis.jpg'),
        address: '765 Dr C.W.W Kannangara, Colombo',
        info: 'Traditional',
        rate: 4.9,
    },
];
const ListHotel = [
    {
        title: 'Laya Safari',
        image:require('./Images/laya-safari.jpg'),
        address: 'Kirinda, Palatupana,Yala Rd, Palatupana',
        info: 'Relaxing',
        rate: 4.5,
    },
    {
        title: 'Taj Bentota Resort',
        image:require('./Images/Taj-Bentota-Resort-Spa.jpg'),
        address: 'National Holiday Resort , Bentota, Galle',
        info: 'Relaxing',
        rate: 4.5,
    },
    {
        title: 'Centara Ceysands',
        image:require('./Images/Centara-Ceysands-Resort.jpg'),
        address: 'Aluthgama - Mathugama Rd, Bentota',
        info: 'Relaxing',
        rate: 4.7,
    },
    {
        title: 'Ayurvedee Hotel',
        image:require('./Images/Ayurvedee-Traditional-Ayurveda.jpg'),
        address: '62 Ettukala Rd, Negombo 11500',
        info: 'Traditional',
        rate: 4.9,
    },
];
const ListActivities = [
    {
        title: 'Polonnaruwa',
        image:require('./Images/Polonnaruva.jpg'),
        address: 'Polonnâruvâ',
        info: 'Historic Tour',
        rate: 4.5,
    },
    {
        title: 'Sigiriya Rock',
        image:require('./Images/Sigiriya_1024x1024.jpg'),
        address: 'Sigiriya',
        info: 'Historic Tour',
        rate: 4.9,
    },
    {
        title: 'Udawalawe Park',
        image:require('./Images/12f5bb1d6b11d9f5a5a9b1f64c59bd41-uda-walawe-national-park.jpg'),
        address: '1st Cross street, Udawalawa',
        info: 'Safari',
        rate: 4.7,
    },
    {
        title: 'Yala Park',
        image:require('./Images/yala-park.jpg'),
        address: 'Hambantota',
        info: 'Safari',
        rate: 4.9,
    },
];
const ListHotSpots = [
    {
        title: 'Lotus Tower',
        image:require('./Images/lotus_tower2.jpg'),
        address: 'Colombo',
        info: 'Tourism',
        rate: 4.5,
    },
    {
        title: 'Kandy',
        image:require('./Images/Temple-of-the-Tooth-in-Kandy.jpg'),
        address: 'Sri Dalada Veediya, Kandy',
        info: 'Historic',
        rate: 4.5,
    },
    {
        title: 'Nuwara Eliya',
        image:require('./Images/nuwara-eliya.jpg'),
        address: 'Nuwara Eliya',
        info: 'Relaxing',
        rate: 4.7,
    },
    {
        title: 'Bentota',
        image:require('./Images/bentota.jpg'),
        address: 'Bentota, Galle',
        info: 'Beach',
        rate: 4.9,
    },
];

console.disableYellowBox = true;
// initialize the width and height of the viewport in two const 
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

//theses two funtions returns a value from a percentage 
// if the height = 200, hp(25) returns 50
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp (percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}
export default class Dashboard extends React.Component{

    //disable the header of react-navigation
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            name:undefined, //name of the user given by props after logged in
            yValue: new Animated.Value(0), //a value used for animate the scrollview
        }
    }
    componentDidMount(){
        this.setState({name:'User'}) //set the name
    }
    // handle the scroll of the ScrollView 
    handleScroll(event:{ nativeEvent: { contentOffset: { x: number, y: number } }}){
        const {y} = event.nativeEvent.contentOffset;
        // console.log(y);
        if(y>715){
            return(<StatusBar backgroundColor="white" barStyle={"dark-content"} />)
        } else { 
            return (
                <StatusBar backgroundColor="transparent" translucent={true} barStyle={"light-content"} />
            )
        }
    }
    //Set the initial scrollview position
    scrollToInitialPosition = () => {
        setTimeout(() => {
            this.scrollViewRef.scrollTo({ y: hp(27), animated:true }); // Scroll the scrollview by 27% of the viewport height
        }, 100); // wait 100ms
      }
  
    render(){
        const { navigate } = this.props.navigation; // set the navigate prop
        return (
            <SafeAreaView style={ds.container}>
                <Image source={require('./Images/road-trip-with-raj-0uI8LANIe0A-unsplash.jpg')} style={ds.backgroundImage}/>
                {/* set the transparency of the status bar for a better render */}
                <StatusBar backgroundColor="transparent" translucent={true} barStyle={"light-content"} />

                <Text style={ds.Title}>Sri-Lanka</Text>
                <Text style={ds.Subtitle}>Start your journey with us</Text>
                    {/* The main scrollView handled by the handlescroll function*/}
                    <ScrollView style={[ds.Scrollable, ]} showsHorizontalScrollIndicator={false} id="Scrollable" onScroll={this.handleScroll} ref={(ref) => { this.scrollViewRef = ref; }} onLayout={this.scrollToInitialPosition}>
                            <View style={ds.panel}>
                                <Text style={ds.Hello}>Hello {this.state.name}, what are you looking for ?</Text>
                                <View style={ds.boxContainerHorizontal}>
                                    {/*This component is used instead of a buttton component, I used the navigate function to change  screen on the onPress method */}
                                    <TouchableOpacity activeOpacity={0.7} style={ds.box1} onPress={() => navigate('Restaurant', {name:this.state.name,
                                    list:ListResto,
                                    page:"Restaurants"})}>
                                        <Image source={require('./Images/DRYpypwUQAEfMNX.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.boxText}>Restaurants</Text>
                                        <View style={ds.iconContainer}>
                                            {/*the icon component is made from svg icons defined in the svg.js component */}
                                            <Icon name="Food" fill="#ffffff" viewBox="0 0 100 100" height='28' width='28'/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7} style={ds.box2} onPress={() => navigate('Restaurant', {name:this.state.name,
                                    list:ListHotel,
                                    page:'Hotels'})}>
                                        <Image source={require('./Images/laya-safari.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.boxText}>Hotels</Text>
                                        <View style={ds.iconContainer}>
                                            <Icon name="hotel" fill="#ffffff" viewBox="0 0 100 100" height='28' width='28'/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={ds.box3} activeOpacity={0.7} onPress={() => navigate('Restaurant', {name:this.state.name,
                                    list:ListActivities,
                                    page:'Activities'})}>
                                    <Image source={require('./Images/Sigiriya_1024x1024.jpg')} style={ds.boxImage}/>
                                        <Text style={ds.boxText}>Activities</Text>
                                        <View style={ds.iconContainer}>
                                            <Icon name="activities" fill="#ffffff" viewBox="0 0 100 100" height='28' width='28'/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={ds.box4} activeOpacity={0.7} onPress={() => navigate('Restaurant', {name:this.state.name,
                                    list:ListHotSpots,
                                    page:'HotSpots'})}>
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
                                        <TouchableOpacity style={ds.bigBox}onPress={() => navigate('GetUserList')}>
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