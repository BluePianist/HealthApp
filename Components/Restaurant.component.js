import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Dimensions, ScrollView, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel'
import rs from './Style/Restaurant_style'
import Icon from './Icon'
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-react-native-sdk'
import { AddReviewForm, state } from './AddReviewForm.component'
import Modal from 'react-native-modal'


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
function Item({ userTitle, userName, userRate, userColor, userContent, publishedDate, activeSlide, Slide }) {
    // Each Review which describe the ListReview
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
    if(activeSlide===Slide){
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
                width:'78%', 
                height:'110%'}}>
                <Text style={rs.title}>{userTitle}</Text>
                {getStars(userRate)}
                <Text style={Object.assign(style.publishedDate)}>{publishedDate}</Text>
                <Text style={Object.assign(style.userContent)}>{userContent}</Text>
            </View>
          </View>
        );
    }else{
        return(
            <View></View>
        )
    }
}
  
export default class Restaurant extends React.Component{
    constructor(props){
        super(props)
        this.state={
            entries: ListResto,
            activeSlide: 0,
            client:undefined,
            currentUserId:undefined,
            data:undefined,
            formVisible: false,
        }
        this._onPress = this._onPress.bind(this)
        this._renderItem = this._renderItem.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this._onRefresh = this._onRefresh.bind(this)
    }
    static navigationOptions = {
        header: null
    }
    componentDidMount(){
        this._loadClient();
        this.setState({
            formVisible:false
        })
    }
    componentWillUnmount(){
        this.state.close
    }
    _onRefresh(){
        const stitchAppClient = Stitch.defaultAppClient;
        const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const db = mongoClient.db("Reviews");
        const reviews = db.collection("Restaurants");

        reviews.find({},{sort: {fullDate: -1}})
        .asArray()
        .then(reviews => {
            this.setState({
                data: reviews
            })
        })
        .catch(e => console.log(e))
    }
    _loadClient(){
        if(!Stitch.hasAppClient('sri-lankapp-wyakx')){
            Stitch.initializeDefaultAppClient('sri-lankapp-wyakx').then(client => {
                this.setState({ client });
           
                if(client.auth.isLoggedIn) {
                  this.setState({ currentUserId: client.auth.user.id })
                }
            });
        } else {
            this.setState({client: Stitch.defaultAppClient})
        }
        this._onRefresh();
    }
    _onPress(){
        this.setState({ formVisible:!this.state.formVisible })
    }
    _renderItem ({item, index}, parallaxProps) {
        // How the slide is displayed in the carousel
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
                <TouchableOpacity activeOpacity={0.6} style={rs.addReview} onPress={this._onPress}>
                    <Icon name="plus" fill="#ffffff" viewBox="0 0 100 100" height='33' width='33' style={rs.plus}/>
                </TouchableOpacity>
                
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
    handleSubmit(){
        const mongoClient = this.state.client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const db = mongoClient.db("Reviews");
        const reviews = db.collection("Restaurants");

        if(state){
        reviews.insertOne({
                userName: state.userName,
                userTitle: state.userTitle,
                userContent: state.userContent,
                userColor: state.userColor,
                publishedDate: state.publishedDate,
                userRate: state.userRate,
                Slide: this.state.activeSlide,
                fullDate: new Date(),
            
        }).then(() => {
            this.setState({formVisible: false})
            setTimeout(() => {
                this._onRefresh();
            }, 100);
        }).catch(e => {console.log('error '+ e);})
        } else {alert('state undefined !' + state)}
    }
    get pagination () {
        // Display dots according to the current slide
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
    get ListReviews (){
        // Return a list with reviews switch the active slide
        const { entries, activeSlide, data } = this.state;
        switch (activeSlide) {
            case 0:
                setTimeout(() => {
                    // console.log(data;
                }, 2000);
                return(
                    <View>
                        {this.pagination}
                        <Text style={rs.title}>Reviews</Text>
                        <FlatList
                        data={data}
                        renderItem={({ item }) => <Item 
                        userName={item.userName} 
                        userRate={item.userRate} 
                        userColor={item.userColor}
                        publishedDate={item.publishedDate}
                        userTitle={item.userTitle}
                        userContent={item.userContent}
                        activeSlide={activeSlide}
                        Slide={item.Slide}
                         />}
                        // keyExtractor={item => Object.values(item._id)}
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
                        data={data}
                        renderItem={({ item }) => <Item 
                        userName={item.userName} 
                        userRate={item.userRate} 
                        userColor={item.userColor}
                        publishedDate={item.publishedDate}
                        userTitle={item.userTitle}
                        userContent={item.userContent}
                        activeSlide={activeSlide}
                        Slide={item.Slide}
                         />}
                        // keyExtractor={item => Object.values(item._id)}
                        />
                    </View>
                )
            break;
            case 2:
                return(
                    <View>
                        {this.pagination}
                        <Text style={rs.title}>Reviews</Text>
                        <FlatList
                        data={data}
                        renderItem={({ item }) => <Item 
                        userName={item.userName} 
                        userRate={item.userRate} 
                        userColor={item.userColor}
                        publishedDate={item.publishedDate}
                        userTitle={item.userTitle}
                        userContent={item.userContent}
                        activeSlide={activeSlide}
                        Slide={item.Slide}
                         />}
                        // keyExtractor={item => Object.values(item._id)}
                        />
                    </View>
                )
            break;
            case 3:
                return(
                    <View>
                        {this.pagination}
                        <Text style={rs.title}>Reviews</Text>
                        <FlatList
                        data={data}
                        renderItem={({ item }) => <Item 
                        userName={item.userName} 
                        userRate={item.userRate} 
                        userColor={item.userColor}
                        publishedDate={item.publishedDate}
                        userTitle={item.userTitle}
                        userContent={item.userContent}
                        activeSlide={activeSlide}
                        Slide={item.Slide}
                         />}
                        // keyExtractor={item => Object.values(item._id)}
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
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                <Modal isVisible={this.state.formVisible} animationIn='zoomIn' animationOut="zoomOut">
                   <AddReviewForm currentResto={ListResto[this.state.activeSlide].title} client={this.state.client} Slide={this.state.activeSlide}/>
                   
                   <View style={{flex:1, flexDirection:'row', 
                   flexWrap:'wrap', width:width, maxHeight:height*0.06, alignSelf:'center',
                   justifyContent:'center', marginTop:-height*0.07,
                   }}>
                        <TouchableOpacity style={rs.submit} activeOpacity={0.7} onPress={this.handleSubmit}>
                            <Text style={{color:'white', fontFamily:'Montserrat-Bold'}}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={rs.closeModal} onPress={this._onPress}>
                            <Text style={{color:'#DA4167', fontFamily:'Montserrat-Bold'}}>Cancel</Text>
                        </TouchableOpacity>
                   </View>
                </Modal>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:height*0.04}}>
                    <Text style={rs.title}>Restaurants</Text>
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
                    <SafeAreaView>
                        { this.ListReviews }  
                    </SafeAreaView>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}