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
            entries: ListResto,
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
            <StatusBar backgroundColor="#B0D0D3" translucent={true} barStyle={"dark-content"} />
            <View style={rs.circle}/>
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