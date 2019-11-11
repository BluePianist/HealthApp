# Sri LankApp
> My first React Native application.
> <br> React Native application about Sri Lanka. Help travelers in the country finding restaurants, hotels, activities and hot spots.

<img id="screenshot" src="/Components/Images/Screenshot1.png" height="30%" width="30%" >

## Table of Contents

1. [Installation](#installation)
2. [Demo](#demo)
3. [How it works](#how-it-works)
4. [Known issues and improvements ](#known-issues-and-improvements)

## Installation

1. install the dependencies
```sh
npm install
```
2. If you're running on a iOs device don't forget to install Pod in the ios folder
```sh
pod install
```
## Demo
### Dashboard screen
This is the main screen of the app. You can find all the `Views` redirecting to the other components.
<br> For a better render onPress I used `TouchableOpacity` instead of a simple `View`.
<br>
<img src="/Components/Images/dashboard_demo.gif" height="30%" width="30%">

### Restaurant component
When the Restaurant View is pressed you are redirected to the Restaurant component. This screen contains a list of restaurants displayed in a `Carousel`. This is the same for the Hotels, Activities and Hot Spots screens.
<br> Below, you can find a list of reviews written by previous users.
<br>
<img src="/Components/Images/carousel_demo.gif" height="30%" width="30%">

### Add a review
You can add a review by touching the + button in the `Carousel`. A `Modal` will appear and you are able to fill the filed and press the Submit button. The `Modal` disappears with a nice animation and your new review is added to the list.
<br>
<img src="/Components/Images/empty_submit_demo.gif" height="30%" width="30%">  <img src="/Components/Images/add_review_demo.gif" height="30%" width="30%">

## How it works
### react-navigation
I'm using `react-navigation` to navigate between screens and pass some state in props.
```javascript
render(){
        const { navigate } = this.props.navigation; // set the navigate prop
        return (
        // [...]
        <TouchableOpacity 
        activeOpacity={0.7} 
        style={ds.box1} 
        onPress={() => navigate('Restaurant', {name:this.state.name, list:ListResto, page:"Restaurants"})}>
        )
}
 ```
 ### react-native-snap-carousel
 For a nice render I opted for [`react-native-snap-carousel`](https://github.com/archriss/react-native-snap-carousel) and its `ParallaxImage`component.
 <br><br> GIF
 ```javascript
 import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel'
 
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
                <View>
                    {/* display the restaurant information within the carousel */}
                </View>
            </View>
       )
}
render(){
        return (
        // [...]
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
       )
}
 ```
### mongodb-stitch-react-native-sdk
The backend is managed using [`mongodb-stitch-react-native-sdk`](https://www.npmjs.com/package/mongodb-stitch-react-native-sdk). This allows the user to add and delete reviews by querying the database.
 <br><br> GIF
```javascript
 import {Stitch, RemoteMongoClient} from 'mongodb-stitch-react-native-sdk'
 
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
    
// this function is used to initialize the client 
_loadClient(){
        if(!Stitch.hasAppClient('sri-lankapp-myid')){ //if the client is not set yet, we do it
            Stitch.initializeDefaultAppClient('sri-lankapp-myid').then(client => {
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
 ```
## Known issues and improvements 
### Sign in / sign up screen
There is no sign in/up screen so far. The user is logged as 'User' and he is not able to change account.
### Temples/Forest/Beaches/Rivers
I didn't use all the View I setted. In the Dashboard component there is some empty views, redirecting to any screen.
