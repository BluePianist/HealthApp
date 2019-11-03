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

export var state = '';

export class AddReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
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
            formVisible: this.props.visible,
            userName: this.props.userName,
            publishedDate: monthName +" "+ date +", "+ year,
            userColor: colors[Math.floor(Math.random() * colors.length)],
            userName:'User',
            ifWiggle: this.props.wiggle,
        })
        this.handleAnimate = this.handleAnimate.bind(this)
        state = this.state
    }
 
    ratingCompleted(rating) {
        this.setState({userRate: rating})
        console.log("Rating is: " + rating)
    }
    handleAnimate(){
        // alert('state '+ this.state.ifWiggle + 'props' + this.props.wiggle)
        Animated.timing(this.state.animatedValue, {
            toValue: 2,
            easing: Easing.elastic(5),
            duration: 1000,
        }).start();
        this.setState({ifWiggle: this.props.wiggle})
        
        setTimeout(() => { 
            this.state.animatedValue.setValue(0)
        }, 1000);
    }
    
    render(){
        state = this.state
        if(this.state.ifWiggle !== this.props.wiggle) this.handleAnimate()
        else console.log('state '+ this.state.ifWiggle + 'props' + this.props.wiggle);
        return(
            <View style={{
                borderRadius:20,
                width:0.9*width,
                backgroundColor:'transparent',
                paddingTop:10,
            }}>
                <Text style={rs.title}>What do you think about {this.props.currentResto} ?</Text>
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