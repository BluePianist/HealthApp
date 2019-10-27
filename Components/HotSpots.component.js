import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Dimensions, ScrollView, Image, StatusBar, FlatList } from 'react-native'
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel'
import rs from './Style/HotSpots_style'
import Icon from './Icon'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ListHotel = [
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
function Item({ title, address, info, rate }) {
    return (
      <View style={rs.itemContainer}>
        <Text style={rs.title}>{title}</Text>
        <Text style={rs.info}>{info}</Text>
        <View style={rs.line} />
        <Text style={rs.addressList}>{address}</Text>
      </View>
    );
  }
  
export default class Restaurant extends React.Component{
    constructor(props){
        super(props)
        this.state={
            entries: ListHotel,
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
            <SafeAreaView style={rs.item}>
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
            </SafeAreaView>
        );
    }
    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
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
        );
    }
    render(){
        return(
            // <SafeAreaView style={rs.container}>
            <ScrollView style={rs.container}>
            <StatusBar backgroundColor="#F7E3AF" translucent={true} barStyle={"dark-content"} />
            <View style={rs.circle}/>
                <SafeAreaView style={rs.carouselContainer}>
                    <Carousel
                    style={rs.carousel}
                    hasParallaxImages={true}
                    data={ListHotel}
                    renderItem={this._renderItem}
                    itemWidth={0.9*width}
                    sliderWidth={width}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    ref={(c) => {this.numberCarousel = c;}}
                    />
                </SafeAreaView>
                    { this.pagination }  
                    <FlatList
                    data={this.state.entries}
                    renderItem={({ item }) => <Item title={item.title} info={item.info} address={item.address} />}
                    keyExtractor={item => item.title}
                    />
                    {/* <Text>Hello</Text> */}
                    {/* <Image style={rs.Image} source={require('./Images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg')}/> */}
            </ScrollView>
            // </SafeAreaView>
        )
    }
}