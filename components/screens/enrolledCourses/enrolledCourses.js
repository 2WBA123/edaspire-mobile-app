import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import Card from '../../shared/card';
import Search from '../../shared/searchBar';



export default function EnrolledCourses({navigation}){
    return(
     
     <View style={StyleSheet.cardContainer}>
       
       <ScrollView>
       <Search/>
       <TouchableOpacity onPress={()=>{navigation.navigate('Course')}} >
          <Card/>
          <Card/>
          <Card/>         
       </TouchableOpacity>
       </ScrollView>
    </View>

    )
}

const styles=StyleSheet.create({
  cardContainer:{
    margin:10,
    borderRadius:10,
  },
})