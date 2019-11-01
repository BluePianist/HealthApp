import React, { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    input:{
        alignSelf:'center',
        fontFamily:'Montserrat',
        fontSize:15,
        borderColor:'lightgrey',
        borderBottomWidth:1,
        borderRadius:5,
        marginLeft:'3%',
        marginTop:'7%',
        padding:0,
        paddingLeft:10,
        width:'60%',
        // height:'12%',
        fontWeight:'normal',
        // backgroundColor:'yellow',
    },
    inputContent:{
        alignSelf:'center',
        fontFamily:'Montserrat',
        fontSize:15,
        borderColor:'lightgrey',
        borderBottomWidth:1,
        borderRadius:5,
        marginLeft:'3%',
        marginTop:'3%',
        padding:0,
        paddingLeft:10,
        width:'90%',
        // height:'17%',
        fontWeight:'normal',
        // backgroundColor:'yellow',
    },
    
})