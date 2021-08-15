import React from 'react'
import { View,StyleSheet,Dimensions,TouchableOpacity,Text} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './carouselItem'
import data from './carouseldata';
import Courses from '../../components/screens/courses/courses';


const CarouselCards = ({navigation}) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <View style={styles.container}>
      
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <View style={styles.container3}>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          paddingBottom:5,
          width: 15,
          height: 15,
          borderRadius: 10,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </View>
      
      <View  style={styles.container2}>
        <TouchableOpacity style={styles.courses} onPress={()=>navigation.navigate('Courses')}>
        <View >
            <Text style={styles.text1}>Courses</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity  style={styles.signup} onPress={()=>navigation.navigate('Login')}>
        <View>
            <Text style={styles.text2}>Login</Text>
        </View>
        </TouchableOpacity>
        
    </View>
       
    </View>
     

  )
}
const styles=StyleSheet.create({

  container:{
    
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container2:{
      flex:1,
    flexDirection:'row',
    width:Dimensions.get('window').width,

  },
  container3:{
     marginTop:20,
  },
  text1:{
      color:'white',
      textAlign:'center',
      fontSize:20,
      paddingVertical:13,
      paddingHorizontal:8,
  },
  text2:{
         color:'white',
         textAlign:'center',
         fontSize:20,
         paddingHorizontal:8,
         paddingVertical:13,       
  },
  courses:{
      width:'50%',
      backgroundColor:'#f05454',
      height:Dimensions.get('window').height,
      
  },
  signup:{
      
      backgroundColor:'#f05454',
      width:'50%',
      height:Dimensions.get('window').height,
  }
})



export default CarouselCards;
