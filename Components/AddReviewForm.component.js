import React from 'react'
import {View, Text, TouchableOpacity, Dimensions, TextInput, Animated, Easing} from 'react-native'
import Modal from 'react-native-modal'
import rs from './Style/Restaurant_style'
import ms from './Style/Modal_style'
import {Rating, AirbnbRating} from 'react-native-ratings'
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-react-native-sdk'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
const colors = ["#DA4167","#832161","#EBB3A9","#A37871","#BF9ACA","#087E8B","#DBC2CF","#DB162F","#043565","#DBEBC0","#6BA292"]

export var state = ''; // we export the state with all the value completed by the user and the value given by the props

export class AddReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'', //The name of the user given by props
            userRate: 5,
            userTitle:'',
            userColor:'',
            userContent:'',
            publishedDate:'',
            formVisible:false,
            ifWiggle: 0,
            animatedValue: new Animated.Value(0),
        }
        this.ratingCompleted = this.ratingCompleted.bind(this);
    }
    componentDidMount(){
        const month = new Date().getMonth();
        const monthName = monthNames[month];
        const date = new Date().getDate();
        const year = new Date().getFullYear();

        this.setState({
            formVisible: this.props.visible, // is the modal visible of not
            userName: this.props.userName, // the name of the user who're currently writing the review
            publishedDate: monthName +" "+ date +", "+ year,
            userColor: colors[Math.floor(Math.random() * colors.length)], // a random color 
            ifWiggle: this.props.wiggle, // if the user press submit when the fileds are empty the fileds wiggle to alert the user
        })
        this.handleAnimate = this.handleAnimate.bind(this)
        state = this.state
    }
    // handle the rating component 
    ratingCompleted(rating) {
        this.setState({userRate: rating}) // set the rate
        console.log("Rating is: " + rating)
    }
    // animate the input fields when the submit button is pressed while the input fileds are empty
    handleAnimate(){
        Animated.timing(this.state.animatedValue, { // Make the input wiggle
            toValue: 2,
            easing: Easing.elastic(5),
            duration: 1000,
        }).start();
        this.setState({ifWiggle: this.props.wiggle}) // refresh the value by querying props
        
        //after the animation, re-initilize the default value
        setTimeout(() => { 
            this.state.animatedValue.setValue(0)
        }, 1000);
    }
    
    render(){
        state = this.state // each render frame, refresh the state we are exporting
        if(this.state.ifWiggle !== this.props.wiggle) this.handleAnimate() // compare the old value (local) to the new one (props) to know if we need to wiggle or not. 
        else console.log('state '+ this.state.ifWiggle + 'props' + this.props.wiggle);
        return(
            <View style={{
                borderRadius:20,
                width:0.9*width,
                backgroundColor:'transparent',
                paddingTop:10,
            }}>
                <Text style={rs.title}>What do you think about {this.props.currentResto} ?</Text>
                {/** The input fields are placed inside a Animated.View in order to make them wiggle if needed */}
                <Animated.View style={{
                    transform:[{
                        translateX: this.state.animatedValue.interpolate({
                            inputRange:[0, 1, 2],
                            outputRange:[1, 10, 1]
                        })
                    }]
                }}>
                    <TextInput style={[ms.input,{borderColor:this.props.color}]} placeholder="Title" placeholderTextColor={this.props.color} multiline={true} onChangeText={userTitle => {this.setState({ userTitle })}}/>
                </Animated.View>
                {/** This component is used to query the rate of the restaurant */}
                <AirbnbRating
                count={5}
                reviews={["Terrible ", "OK ", "Hmm... ", "Good ", "Amazing "]}
                defaultRating={5}
                size={50}
                onFinishRating={this.ratingCompleted} 
                />
                <Animated.View style={{
                    transform:[{
                        translateX: this.state.animatedValue.interpolate({
                            inputRange:[0, 1, 2],
                            outputRange:[1, 10, 1]
                        })
                    }]
                }}>
                    <TextInput style={[ms.inputContent, {borderColor:this.props.color}]} placeholder="Your content" placeholderTextColor={this.props.color} multiline={true} onChangeText={userContent => {this.setState({ userContent })}}/>
                </Animated.View>
                <View style={{height:height*0.20}}/>
            </View>
        )
    }
}

export default {AddReviewForm, state };