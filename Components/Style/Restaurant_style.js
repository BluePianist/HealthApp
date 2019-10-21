import React, { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        // backgroundColor:'blue',
        flex: 1,
        height:hp('100%'),
    },
    carouselContainer:{
        marginTop:hp('5%'),
        // position:'relative',
        flex: 1,
        height:hp('40%'),
        borderRadius:30,
        // backgroundColor:'yellow',
    },
    carousel: {
        flex: 1,
        // backgroundColor: 'black',
        position:'relative',
        // borderRadius:50,
      },
      item: {
        width:'100%',
        height:'100%',
        borderWidth: 2,
        backgroundColor: 'transparent',
        flex: 1,
        borderRadius: 50,
        borderColor: 'white',
        flexDirection:'column',
        // justifyContent:'center',
        // alignContent:'center',
        // alignItems:'center',
        // elevation: 3
      },
      title:{
          position:'relative',
          fontSize:25,
          fontFamily:'Audrey-Bold',
        //   marginRight:'auto',
        //   marginLeft:'auto',
          color:'black',
        //   textAlign:'center',
          padding:5,
          zIndex:2,
      },
      containerImage:{
        flex:1,
        borderRadius:20,
        backgroundColor:'white',
      },
      Image:{
          width:'100%',
          height:'100%',
        //   flex: 1,
          resizeMode:'contain',
          backgroundColor:'black',
        //   borderRadius:30,
      },
      infoResto:{
          flex:1,
          height:'30%',
          width:'94%',
          backgroundColor:'white',
          position:'absolute',
          borderRadius:20,
        //   justifyContent:'center',
          alignItems:'center',
          marginTop:'55%',
        //   marginLeft:'auto',
          marginRight:'auto',
          alignSelf:'center',
      }
})