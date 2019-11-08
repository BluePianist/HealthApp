import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Dimensions, ScrollView, Image, StatusBar, FlatList, TouchableOpacity, Animated, Easing } from 'react-native'
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel'
import rs from './Style/Restaurant_style'
import Icon from './Icon'
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-react-native-sdk'
import { AddReviewForm, state } from './AddReviewForm.component'
import Modal from 'react-native-modal'

const arrayToString = require('arraybuffer-to-string')
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// the list of the restaurants of the app

// returns the number of stars according to the rate given. It is displayed within the ListView
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
// returns a button to delete the review if this review were posted by this user
function deleteButton(userName, currentUserName, onDelete, reviewId){
    const style={
        circle:{
            position:'absolute',
            maxHeight:height*0.05,
            minHeight:height*0.05,
            minWidth:height*0.05,
            maxWidth:height*0.05,
            marginLeft:'95%',
            marginTop:'-3%',
            backgroundColor:'#DA4167',
            borderRadius:height*0.05/2,
            zIndex:2,
            flex:1,
            flexDirection:'column',
            shadowOffset:{width: 0, height: 0},
            elevation: 5,
            shadowColor: 'black',
            shadowRadius:2,
            shadowOpacity:1,
        }
    }
    if(userName === currentUserName){ 
        //userName is the name of the user who posted the review and currentUserName is the name of the user who are currently connected
        return(
            <TouchableOpacity style={Object.assign(style.circle)} onPress={() => onDelete(reviewId)}>
                <Icon name="trash" fill='#ffffff' viewBox='0 0 100 100' height='22' width='22' style={rs.userIcon}/>
            </TouchableOpacity>
        )
    } else {
        return(
            <View/>
        )
    }
}

// the main function, called by renderItem in order to render each item of the ListView
function Item ({ userTitle, userName, userRate, userColor, userContent, publishedDate, activeSlide, Slide, currentUserName, onDelete, reviewId }) {
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
        //Number: activeSlide is the current index of the carouselView. That corresponds to which restaurant we are dealing with right now
        //Number: Slide is the index slide the review was posted: this is a review about the restaurant N°Slide
        return (
          <View style={rs.itemContainer}>
            {deleteButton(userName, currentUserName, onDelete, reviewId)}
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
            entries: this.props.navigation.getParam('list'),
            page: this.props.navigation.getParam('page'),
            activeSlide: 0, // the current slide of the carousel
            client:undefined, // the responsed after login to Stitch
            currentUserId:undefined, //the id given after login
            data:undefined, // all the reviews given by the Mongodb database
            formVisible: false, //if the Modal is visible or not
            currentUserName: undefined, // the user currently login
            modalOut:'', //the close animation of the Modal
            alertColor: '#a9a9a9', //the color passed to the Modal component
            emptySubmit: 0, //if the form to add a review is empty when the submit button is pressed
            animatedValue: new Animated.Value(0), // some animated value
            animatedColor: new Animated.Value(0),
            fadeOut: new Animated.Value(1),
            fadeIn: new Animated.Value(0),
        }
        this._onPress = this._onPress.bind(this)
        this._renderItem = this._renderItem.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this._onRefresh = this._onRefresh.bind(this)
        this._onDelete = this._onDelete.bind(this)
        this._handleAnimation = this._handleAnimation.bind(this)
        // this.Item = this.Item.bind(this)
    }
    
    static navigationOptions = {
        header: null
    }
    componentDidMount(){
        this._loadClient();
        this.setState({
            page: this.props.navigation.getParam('page'),
            formVisible:false, // the modal is closed by default
            modalOut:'zoomOut', // the closing animation by default is zoomOut for the Modal
            emptySubmit: 0, //by default there is no submit yet
            currentUserName: this.props.navigation.getParam('name'), //get the username
        })
    }
    componentWillUnmount(){
        this.state.close //close the client
    }
    //this function is used when we want to refresh the listView when a review were added or deleted
    _onRefresh(){
        const stitchAppClient = Stitch.defaultAppClient; //set the appclient
        const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas"); //get the client from the factory
        const db = mongoClient.db("Reviews"); // set the database we will use
        const reviews = db.collection(this.state.page); // set the collection we will use

        reviews.find({},{sort: {fullDate: -1}}) //we use find with no parameters to get all the reviews sorted by date
        .asArray() // we want an array
        .then(reviews => {
            this.setState({
                data: reviews //then we set the state 
            })
        })
        .catch(e => console.log(e))
    }
    // this function is called when the user press the delete button
    _onDelete(reviewId){
        const stitchAppClient = Stitch.defaultAppClient;
        const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const db = mongoClient.db("Reviews");
        const reviews = db.collection(this.state.page);
        //same as _onRefresh so far
        
        reviews.deleteOne({_id: reviewId}) //we delete the review that corresponds to the id given
        .then(()=>{
            this._onRefresh(); // then refresh the listView
            alert('deleted '+ reviewId)
        }).catch(e => console.log(e))
    }
    // this function is used to initialize the client 
    _loadClient(){
        if(!Stitch.hasAppClient('sri-lankapp-wyakx')){ //if the client is not set yet, we do it
            Stitch.initializeDefaultAppClient('sri-lankapp-wyakx').then(client => {
                //we initialize the client with the id given by Mongodb Stitch
                this.setState({ client }); //we set the state 
           
                if(client.auth.isLoggedIn) {
                  this.setState({ currentUserId: client.auth.user.id }) // and the id
                }
            });
        } else {
            this.setState({client: Stitch.defaultAppClient})
        }
        this._onRefresh(); // and we refresh the list to display it the first time
    }
    //this function deals with the animation of the Modal component
    _handleAnimation(){
        this.setState({ modalOut:'bounceOutDown'}); // if this function is called we change the closing animation from zoomOut to bounceOutDown
        
        //the parallel function is used to launch several animation at the same time
        Animated.parallel([
            Animated.timing(this.state.animatedValue, { // We reduce the size of the modal view
                toValue: 1,
                duration: 400,
                easing: Easing.elastic(1)
            }),
            Animated.timing(this.state.fadeOut,{ // we make the old modal content disappear
                toValue:0,
                duration:200,
            }),
            Animated.timing(this.state.fadeIn,{ // to display the new one
                toValue:1,
                duration:300,
            }),
            Animated.timing(this.state.animatedColor,{ // and change the color from white to red
                toValue:150,
                duration:400,
            })
    
        ]).start()
        setTimeout(() => { // then, when the previous animation is totally completed we re-initialize the value to default
            this.state.animatedValue.setValue(0)
            this.state.animatedColor.setValue(0)
            this.state.fadeOut.setValue(1)
            this.state.fadeIn.setValue(0)
        }, 3000);
    }
    // this onPress is called by the cancel button of the Modal component
    _onPress(){
        this.setState({ 
            formVisible:!this.state.formVisible, // we toggle the visible state of the modal component
            modalOut:'zoomOut', // set the closing animation to zoomOut
            alertColor:'#a9a9a9', // set the color to default
            emptySubmit: 0, // re-initialize the emptySubmit value
         })
    }
    //this function is called by the carousel view, to diplay all the restaurants
    _renderItem ({item, index}, parallaxProps) {
        // How the slide is displayed within the carousel
        const {title, image, address, info, rate} = item;
        return (
            <View style={rs.item}>
                {/**An image with parralax effect */}
                <ParallaxImage 
                containerStyle={rs.containerImage}
                style={rs.Image}
                source={item.image}
                parallaxFactor={0.4}
                {...parallaxProps}
                /> 
                {/**Button for add a review. it toggles the state of the modal and make it visible */}
                <TouchableOpacity activeOpacity={0.6} style={rs.addReview} onPress={() => {this.setState({ formVisible:!this.state.formVisible })}}>
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
            </View>
        );
    }
    //when the user press the submit button in order to add a review
    handleSubmit(){
        const mongoClient = this.state.client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const db = mongoClient.db("Reviews");
        const reviews = db.collection(this.state.page);
        // initialize all the const for fetching the data

        if(state.userTitle && state.userContent){ //if the form isn't empty
        reviews.insertOne({ // insert all the correct information
                userName: state.userName,
                userTitle: state.userTitle,
                userContent: state.userContent,
                userColor: state.userColor,
                publishedDate: state.publishedDate,
                userRate: state.userRate,
                Slide: this.state.activeSlide,
                fullDate: new Date(),
            
        }).then(() => {
            this._handleAnimation(); // then run the nice animation
            setTimeout(() => { // after 400ms close the modal component by changing the formVisible state
                this.setState({formVisible: false})
                this._onRefresh(); // and refresh the ListView to make the new review appear
            }, 400);
        }).catch(e => {console.log('error '+ e);})
        } else { // if empty set the color of the imput placeholder to "alercolor" and increment the emptySubmit value
            this.setState({ alertColor: '#DA4167', emptySubmit: this.state.emptySubmit + 1})
            // alert('Can\'t be empty !')
        }
    }
    //get the pagination (little dots below the carousel) 
    get pagination () {
        // Display dots according to the current slide
        const { entries, activeSlide } = this.state;
        return (
            <View>
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ 
                  marginTop:-20,  
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 1,
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
    // The list of the reviews
    get ListReviews (){
        // Return a list with reviews switch the active slide
        const { entries, activeSlide, data, currentUserName } = this.state;
        
        switch (activeSlide) {
            case 0:
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
                        currentUserName={currentUserName}
                        onDelete={this._onDelete}
                        reviewId={item._id}
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
                        currentUserName={currentUserName}
                        onDelete={this._onDelete}
                        reviewId={item._id}
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
                        currentUserName={currentUserName}
                        onDelete={this._onDelete}
                        reviewId={item._id}
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
                        currentUserName={currentUserName}
                        onDelete={this._onDelete}
                        reviewId={item._id}
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
        // define the color for animate the Modal
        const interpolateColor = this.state.animatedColor.interpolate({
            inputRange:[0, 150],
            outputRange:['#ffffff', '#DA4167']
        });
        
        return(
            <SafeAreaView style={rs.container}>
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                {/**the Modal Component, when the button add is pressed */}
                <Modal isVisible={this.state.formVisible} animationIn='zoomIn' animationOut={this.state.modalOut} animationOutTiming={1000} backdropTransitionOutTiming={1000}>
                    {/**In order to animate the modal View we need a Animated.View */}
                    <Animated.View 
                        style={{
                        position:'absolute',
                        flex:1,
                        flexDirection:'column',
                        width:0.9*width,
                        maxHeight:0.51*height,
                        backgroundColor:interpolateColor,
                        borderRadius:20,
                        transform: [
                            {
                                translateX: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                })
                            },
                            {
                                translateY: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                })
                            },
                            {
                                scaleX: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0.65]
                                })
                            },
                            {
                                scaleY: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0.25]
                                })
                            }
                        ]
                        }}>
                            {/**This second animated view is for changing the opacity of the texte within the Modal */}
                        <Animated.View style={{flex: 1, flexDirection:'column', opacity: this.state.fadeOut}}>
                            {/** the content of the modal is defined in the AddReviewVorm component */}
                            <AddReviewForm currentResto={this.state.entries[this.state.activeSlide].title} client={this.state.client} Slide={this.state.activeSlide} color={this.state.alertColor} wiggle={this.state.emptySubmit} userName={this.state.currentUserName}/>
                            <View style={{flex:1, flexDirection:'row', 
                            flexWrap:'wrap', width:width, height:height*0.06, alignSelf:'center',
                            justifyContent:'center', marginTop:height*0.43, position:'absolute'
                            }}>
                                    <TouchableOpacity style={rs.submit} activeOpacity={0.7} onPress={this.handleSubmit}>
                                        <Text style={{color:'white', fontFamily:'Montserrat-Bold'}}>Submit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={rs.closeModal} onPress={this._onPress}>
                                        <Text style={{color:'#DA4167', fontFamily:'Montserrat-Bold'}}>Cancel</Text>
                                    </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </Animated.View>
                    <Animated.Text style={{
                        position:'absolute',
                        fontSize:23,
                        fontFamily:'Montserrat-Bold',
                        color:'white',
                        textAlign:'center',
                        alignSelf:'center',
                        padding:5,
                        opacity: this.state.fadeIn
                    }}>Thank you !</Animated.Text>
                </Modal>
                {/** This scroll view contains the carousel and the List View with all the reviews  */}
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:height*0.04}}>
                    <Text style={rs.title}>{this.state.page}</Text>
                    <View style={rs.carouselContainer}>
                        <Carousel
                        style={rs.carousel}
                        hasParallaxImages={true}
                        data={this.state.entries}
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