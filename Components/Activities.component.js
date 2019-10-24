import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Dimensions, ScrollView, Image, StatusBar, FlatList } from 'react-native'
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel'
import rs from './Style/Activities_style'
import Icon from './Icon'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ListHotel = [
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
            <ScrollView style={rs.container}>
            <StatusBar backgroundColor="#F7AF9D" translucent={true} barStyle={"dark-content"} />
            <View style={rs.circle}/>
                <View style={rs.carouselContainer}>
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
                </View>
                    { this.pagination }  
                    <FlatList
                    data={this.state.entries}
                    renderItem={({ item }) => <Item title={item.title} info={item.info} address={item.address} />}
                    keyExtractor={item => item.title}
                    />
                    {/* <Text>Hello</Text> */}
                    {/* <Image style={rs.Image} source={require('./Images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg')}/> */}
            </ScrollView>
        )
    }
}