import React from 'react'
import {View, Text, TouchableOpacity, Dimensions, TextInput} from 'react-native'
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
        }
        this.ratingCompleted = this.ratingCompleted.bind(this);
    }
    componentDidMount(){
        console.log(this.props.visible);
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
        })
        state = this.state
    }
 
    ratingCompleted(rating) {
        this.setState({userRate: rating})
        console.log("Rating is: " + rating)
    }

    
    render(){
        state = this.state
        return(
            <View style={{
                borderRadius:20,
                width:0.9*width,
                backgroundColor:'white',
                paddingTop:10,
            }}>
                <Text style={rs.title}>What do you think about {this.props.currentResto} ?</Text>
                <TextInput style={ms.input} placeholder="Title" multiline={true} onChangeText={userTitle => this.setState({userTitle})}/>
                <AirbnbRating
                count={5}
                reviews={["Terrible ", "OK ", "Hmm... ", "Good ", "Amazing "]}
                defaultRating={5}
                size={20}
                onFinishRating={this.ratingCompleted} />
                <TextInput style={ms.inputContent} placeholder="Your content"  multiline={true} onChangeText={userContent => this.setState({userContent})}/>
                <View style={{height:height*0.20}}/>
            </View>
        )
    }
}

export default {AddReviewForm, state };