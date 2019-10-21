import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Dimensions, ScrollView, Image, StatusBar} from 'react-native'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel'
import rs from './Style/Restaurant_style'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ListResto = [
    {
        title: 'Nuga Gama',
        image:require('./Images/043_nugaGamaNight-JPG.jpg'),
    },
    {
        title: 'Resto 2',
        image:require('./Images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg'),
    },
    {
        title: 'Resto 3',
        image:require('./Images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg'),
    },
    {
        title: 'Resto 4',
        image:require('./Images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg'),
    },
];
export default class Restaurant extends React.Component{
    static navigationOptions = {
        header: null
    }

    _renderItem ({item, index}, parallaxProps) {
        // console.log(uri);
        const {title, image} = item;
        return (
            <View style={rs.item}>
                <ParallaxImage
                containerStyle={rs.containerImage}
                style={rs.Image}
                source={item.image}
                parallaxFactor={0.4}
                {...parallaxProps}/>
                <View style={rs.infoResto}>
                    <Text style={rs.title}>{ title }</Text>

                </View>
                {/* </ParallaxImagestyle={rs.Image}> */}
            </View>
        );
    }

    render(){
        return(
            <ScrollView style={rs.container}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={"dark-content"} />
                <View style={rs.carouselContainer}>
                    <Carousel
                    style={rs.carousel}
                    hasParallaxImages={true}
                    data={ListResto}
                    renderItem={this._renderItem}
                    itemWidth={0.9*width}
                    sliderWidth={width}
                    ref={(c) => {this.numberCarousel = c;}}
                    />
                    
                </View>
                    <Text>Hello</Text>
                    {/* <Image style={rs.Image} source={require('./Images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg')}/> */}
            </ScrollView>
        )
    }
}