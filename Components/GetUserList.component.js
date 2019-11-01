import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

function Item( Name ){
    return(
        <View>
            <Text>{Name.Name}</Text>
        </View>
    )
}

class GetUserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:undefined,
            client:undefined,
            currentUserId:undefined,
        }
        this._loadClient = this._loadClient.bind(this);
        this._onPress = this._onPress.bind(this);
    }

    componentDidMount(){
        this._loadClient();
    }

    _loadClient() {
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
        const stitchAppClient = Stitch.defaultAppClient;
        const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const db = mongoClient.db("Reviews");
        const users = db.collection("Restaurants");

        users.find()
        .asArray()
        .then(users => {
            this.setState({
                data: users
            })
            console.log(users);
        })
        .catch(e => console.log(e))
    }
    _onPress(){
        this.state.client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
            console.log(`Successfully logged in as user ${user.id}`);
            this.setState({ currentUserId: user.id })
        }).catch(err => {
            console.log(`Failed to log in anonymously: ${err}`);
            this.setState({ currentUserId: undefined })
        });
        const stitchAppClient = Stitch.defaultAppClient;
        const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const db = mongoClient.db("test");
        const users = db.collection("users");

        users.find()
        .asArray()
        .then(users => {
            this.setState({
                data: users
            })
            // console.log(this.state.data);
        })
        .catch(e => console.log(e))
    }     
    render() {
        const style=StyleSheet.create({
            button:{
                fontSize:20,
                alignSelf:'center',
                textAlignVertical:'center',
                textAlign:'center',
                height:40,
                width:200,
                backgroundColor:'red'
            }
        })
        let loginStatus = 'logout';
        if(this.state.currentUserId) loginStatus = this.state.currentUserId
        return ( 
            <View>
                <Text>Hello Guys {loginStatus}</Text>
                <Text style={style.button} onPress={this._onPress}>Button</Text>
                <Text>users: </Text>
                <FlatList data={this.state.data} renderItem={({item}) => <Item Name={item.Name}/>}/>
            </View>
         );
    }
}
 
export default GetUserList;