import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Dimensions, ScrollView, Image, StatusBar, FlatList } from 'react-native'
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel'
import rs from './Style/Restaurant_style'
import Icon from './Icon'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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
const Reviews_1 = [
    {
        userName:'Thivya',
        userRate: 4,
        userColor:'#DA4167',
        publishedDate: 'May 19, 2019',
        userTitle:'I felt at home',
        userContent:'Fantastic food and authentic Sri Lankan feel. Host Mr ruwan and Mrs nimini were very hospitable and made us feel at home'
    },
    {
        userName:'Douglas',
        userRate: 5,
        userColor:'#832161',
        publishedDate: 'January 2, 2019',
        userTitle:'Amazing',
        userContent:'Fantastic food and authentic Sri Lankan feel. Host Mr ruwan and Mrs nimini were very hospitable and made us feel at home'
    },
    {
        userName:'Sahani',
        userRate: 5,
        userColor:'#EBB3A9',
        publishedDate: 'January 22, 2018',
        userTitle:'I\'ll be back !',
        userContent:'If you only in SL for short time definitely check out this place. The moment you walk in to this restaurant right away you feels like been taken away to the local Villages and invited for a village feast. All the foods are traditional and authentic. For visitors you must go in with open mind with their foods and flavour. Most dishes aren’t too spicy. Friendly staff !! Have chickens running around the ground which are fun to watch. This is a great SL experience for sure !!'
    },
]
const Reviews_2 = [
    {
        userName:'Brice',
        userRate: 3,
        userColor:'#E87EA1',
        publishedDate: 'May 19, 2019',
        userTitle:'A bit expensive',
        userContent:'Fantastic food and authentic Sri Lankan feel. Host Mr ruwan and Mrs nimini were very hospitable and made us feel at home'
    },
    {
        userName:'Bob',
        userRate: 4,
        userColor:'#A4BEF3',
        publishedDate: 'January 2, 2019',
        userTitle:'Nice place',
        userContent:'Fantastic food and authentic Sri Lankan feel. Host Mr ruwan and Mrs nimini were very hospitable and made us feel at home'
    },
    {
        userName:'Pierre',
        userRate: 5,
        userColor:'#857885',
        publishedDate: 'January 22, 2018',
        userTitle:'Romantic Dinner',
        userContent:'If you only in SL for short time definitely check out this place. The moment you walk in to this restaurant right away you feels like been taken away to the local Villages and invited for a village feast. All the foods are traditional and authentic. For visitors you must go in with open mind with their foods and flavour. Most dishes aren’t too spicy. Friendly staff !! Have chickens running around the ground which are fun to watch. This is a great SL experience for sure !!'
    },
]

function getStars(rate){
    const style={
        star:{
            position:'relative',
            marginHorizontal:1,
        },
        starContainer:{
            marginTop:-26,
            marginLeft:10,
            width:110, 
            maxHeight:45, 
            flex:1, 
            flexDirection:'row',
            // backgroundColor:'green'
        }
    }
    switch (rate) {
        case 0:
            return(
                <View style={Object.assign(style.starContainer)}>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                </View>
            )
        break;
        case 1:
            return(
                <View style={Object.assign(style.starContainer)}>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                </View>
            )
        break;
        case 2:
            return(
                <View style={Object.assign(style.starContainer)}>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                </View>
            )
        break;
        case 3:
            return(
                <View style={Object.assign(style.starContainer)}>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                </View>
            )
        break;
        case 4:
            return(
                <View style={Object.assign(style.starContainer)}>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFEECC" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                </View>
            )
        break;
        case 5:
            return(
                <View style={Object.assign(style.starContainer)}>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                    <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={Object.assign(style.star)}/>
                </View>
            )
        break;
    
        default:
            break;
    }
}
function Item({ userTitle, userName, userRate, userColor, userContent, publishedDate }) {
    const style={
        circle:{
            position:'relative',
            maxHeight:height*0.08,
            minHeight:height*0.08,
            minWidth:height*0.08,
            maxWidth:height*0.08,
            backgroundColor:'white',
            borderWidth:4,
            borderRadius:height*0.08/2,
            zIndex:-1,
            flex:1,
            flexDirection:'column',
            borderColor:userColor,
            marginLeft:'auto',
            marginRight:'auto',
        },
        publishedDate:{
            position:'relative',
            marginTop:-height*0.025,
            marginLeft:'auto',
            fontFamily:'Montserrat-Medium',
            fontSize:13,
            color:'#888888',
        },
        userContent:{
            fontFamily:'Montserrat-Medium',
            marginLeft:width*0.03,
            marginTop:height*0.01,
        }
    }
    return (
      <View style={rs.itemContainer}>
        <View style={{width:width*0.2, marginLeft:-12}}>
            <View style={Object.assign(style.circle)}>
                <Icon name="User" fill={userColor} viewBox='0 0 100 100' height='34' width='34' style={rs.userIcon}/>
            </View>
            <Text style={rs.userName}>{userName}</Text>
        </View>
        <View style={{
            marginTop:-10, 
            // backgroundColor:'white', 
            width:'78%', 
            height:'110%'}}>
            <Text style={rs.title}>{userTitle}</Text>
            {getStars(userRate)}
            <Text style={Object.assign(style.publishedDate)}>{publishedDate}</Text>
            <Text style={Object.assign(style.userContent)}>{userContent}</Text>
        </View>
      </View>
    );
  }
  
export default class Restaurant extends React.Component{
    constructor(props){
        super(props)
        this.state={
            entries: ListResto,
            reviews1: Reviews_1,
            reviews2: Reviews_2,
            activeSlide: 0,
        }
    }
    static navigationOptions = {
        header: null
    }
    _renderItem ({item, index}, parallaxProps) {
        // console.log(uri);
        const {title, image, address, info, rate} = item;
        return (
            <View style={rs.item}>
                <ParallaxImage
                containerStyle={rs.containerImage}
                style={rs.Image}
                source={item.image}
                parallaxFactor={0.4}
                {...parallaxProps}
                />
                <View style={rs.infoResto}>
                    <Text style={rs.title}>{ title }</Text>
                    <View style={rs.iconStarContainer}>
                        <Icon name="star" fill="#FFD275" viewBox="0 0 100 100" height='64' width='20' style={rs.star}/>
                        <Text style={rs.rate}>{ rate }</Text>
                    </View>
                    <Text style={rs.info}>{ info }</Text>
                    <View style={rs.line}/>
                    <View style={rs.iconContainer}>
                        <Icon name="map" fill="#000000" viewBox="0 0 100 100" height='64' width='15'/>
                        <Text style={rs.address}>{ address }</Text>
                    </View>
                </View>
                {/* </ParallaxImagestyle={rs.Image}> */}
            </View>
        );
    }
    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <View>
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ 
                  //   backgroundColor: 'blue',
                  //   opacity:0.5,
                  marginTop:-20,  
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 1,
                    //   marginTop: -80,
                    backgroundColor: 'black'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                />
            </View>
        );
    }
    get InfoResto (){
        const { entries, activeSlide } = this.state;
        switch (activeSlide) {
            case 0:
                return(
                    <View>
                        {this.pagination}
                        <Text style={rs.title}>Reviews</Text>
                        <FlatList
                        data={this.state.reviews1}
                        renderItem={({ item }) => <Item 
                        userName={item.userName} 
                        userRate={item.userRate} 
                        userColor={item.userColor}
                        publishedDate={item.publishedDate}
                        userTitle={item.userTitle}
                        userContent={item.userContent}
                         />}
                        keyExtractor={item => item.UserTitle}
                        />
                    </View>
                )
            break;
            case 1:
                return(
                    <View>
                        {this.pagination}
                        <Text style={rs.title}>Reviews</Text>
                        <FlatList
                        data={this.state.reviews2}
                        renderItem={({ item }) => <Item 
                        userName={item.userName} 
                        userRate={item.userRate} 
                        userColor={item.userColor}
                        publishedDate={item.publishedDate}
                        userTitle={item.userTitle}
                        userContent={item.userContent}
                         />}
                        keyExtractor={item => item.UserTitle}
                        />
                    </View>
                )
            break;
        
            default:
                return(
                    <View>
                        {this.pagination}
                        <Text style={rs.title}>Reviews</Text>
                        <Text>Hi</Text>
                    </View>
                )
                break;
        }
    }
    render(){
        return(
            <SafeAreaView style={rs.container}>
                <ScrollView>
                <StatusBar translucent={true} barStyle={"dark-content"} />
                    <View style={rs.carouselContainer}>
                        <Carousel
                        style={rs.carousel}
                        hasParallaxImages={true}
                        data={ListResto}
                        renderItem={this._renderItem}
                        itemWidth={0.9*width}
                        sliderWidth={width}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        ref={(c) => {this.numberCarousel = c;}}
                        />
                    </View>
                    { this.InfoResto }  
                    {/* <FlatList
                    data={this.state.entries}
                    renderItem={({ item }) => <Item title={item.title} info={item.info} address={item.address} />}
                    keyExtractor={item => item.title}
                    />  */}
                    {/* <Text>Hello</Text> */}
                    {/* <Image style={rs.Image} source={require('./Images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg')}/> */}
                    </ScrollView>
            </SafeAreaView>
        )
    }
}