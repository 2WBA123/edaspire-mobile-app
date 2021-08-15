import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet,Text, View} from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} style={{backgroundColor:'rgba(240,84,84,1)'}} icon="notebook" />

const MyComponent = () => (
  <Card style={styles.cardContainer}>
    <Card.Title title="Course title" subtitle=" Category" left={LeftContent}/>
    <Card.Content>
      
      
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
     <View style={{flexDirection:'row'}}>
     <Title style={{color:'blue',marginTop:10,marginRight:185,marginLeft:5}}> Rs. <Text>300.00</Text></Title>
     <Text style={{margin:9,
        fontStyle:'normal',
        backgroundColor:'#f05454',
        height:30,
        width:35,
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:3,        
        }}>0.0</Text>
     </View>
     <View style={{flexDirection:'row'}}>
     <Title style={{color:'blue',marginTop:10,marginRight:185,marginLeft:5}}> Batches <Text>00</Text></Title>
     <Text style={{margin:9,
        fontStyle:'normal',       
        }}>Total Enrollments<Text>00</Text></Text>
     </View>
    
  </Card>
);
const styles =StyleSheet.create({
    cardContainer:{
      margin:10,
      borderRadius:10,
      borderColor:'#999'
    }
})

export default MyComponent;