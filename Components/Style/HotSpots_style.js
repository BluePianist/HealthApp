import React, { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        // backgroundColor:'blue',
        flex: 1,
        height:hp('100%'),
        marginTop:'5%'
    },
    itemContainer:{
      width:'90%',
      alignSelf:'center',
      flex: 1,
      flexDirection: 'column',
      // alignItems:'flex-start',
      borderRadius:20,
      marginVertical:5,
      backgroundColor:'white',
      padding:20,
      shadowOffset:{width: 0, height: 0},
      elevation: 10,
      shadowColor: 'black',
      shadowRadius:2,
      shadowOpacity:1,
    },
    circle:{
      position:'absolute',
      alignSelf:'center',
        // marginLeft:'-30%',
        marginTop:'-40%',
        height:hp('60%'),
        width:hp('60%'),
        backgroundColor:'#F7E3AF',
        // opacity:0.3,
        borderRadius:hp('60%')/2,
        zIndex:-1,
    },
    carouselContainer:{
        marginTop:hp('5%'),
        // position:'relative',
        flex: 1,
        height:hp('40%'),
        // borderRadius:30,
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
        // borderWidth: 2,
        backgroundColor: 'transparent',
        flex: 1,
        // borderRadius: 50,
        // borderColor: 'white',
        flexDirection:'column',
        // justifyContent:'center',
        // alignContent:'center',
        // alignItems:'center',
        // elevation: 3
      },
      title:{
          position:'relative',
          fontSize:23,
          fontFamily:'Montserrat-Bold',
        //   marginRight:'auto',
          marginLeft:'3%',
          color:'black',
        //   textAlign:'center',
          padding:5,
          zIndex:2,
      },
      info:{
        fontFamily:'Montserrat-Medium',
        position:'relative',
        marginLeft:'5%',
        color:"#888888",
      },
      line:{
        borderBottomWidth:0.5,
        borderBottomColor:'#a8a8a8',
        width:'90%',
        alignSelf:'center',
      },
      address:{
        fontFamily:'Montserrat-Medium',
        position:'relative',
        marginTop:-40,
        marginLeft: 25,
      },
      addressList:{
        fontFamily:'Montserrat-Medium',
        position:'relative',
        marginLeft: '5%',
        marginTop:'3%',
      },
      rate:{
        fontFamily:'Montserrat-Medium',
        position:'relative',
        marginTop:-40,
        marginLeft: '87%',
      },
      containerImage:{
        flex:1,
        borderRadius:20,
        backgroundColor:'white',
      },
      iconContainer:{
        marginTop:-12,
        // backgroundColor:'yellow',
        height:'auto',
        marginLeft:15,
        marginRight:'auto',
      },
      iconStarContainer:{
        width:'100%',
        height:'30%',
        position:'absolute',
        // backgroundColor:'yellow',
        marginRight:'auto',
      },
      star:{
        marginLeft:'80%',
        marginTop:'-2%',
        position:'relative',
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
          flexDirection:'column',
          height:'30%',
          width:'94%',
          backgroundColor:'white',
          position:'absolute',
          borderRadius:20,
        //   justifyContent:'center',
          // alignItems:'center',
          marginTop:'55%',
          // marginLeft:0,
          // marginRight:'auto',
          alignSelf:'center',
          padding:4,
      }
})