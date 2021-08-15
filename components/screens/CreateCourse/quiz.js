import { func } from 'prop-types';
import React, { useState } from 'react';
import {StyleSheet,View,Text,FlatList,Modal,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { globalStyles } from '../../styles/style/global';
import Card from '../../shared/cards/card';
import {MaterialIcons} from '@expo/vector-icons';
import QuizForm from '../CreateCourse/quizForm';




export default function Quiz({navigation}){
    const [modalOpen,setModalOpen]=useState(false);
    const [quiz,setQuiz]=useState ([]);

    const addQuiz =(quizdata)=>{
        const dataa=quizdata
          setQuiz([...batch, dataa]);
          setModalOpen(false);
    }
  

      return(     
          <View style={globalStyles.batchcontainer}>
            <Modal visible={modalOpen} animationType='slide' style={{}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View  style={styles.modalContent}>
                   
                  <QuizForm addQuiz={addQuiz}/>
                  <MaterialIcons 
                   name='close'
                   size={30}
                   style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=>setModalOpen(false)}
                  />
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            
              <FlatList 
              data={quiz}
              renderItem={({item})=>(
                  <View> 
                   <Card>
                         
                    </Card>                 
                  </View>
              )}
              />
              <View style={styles.addSection}>
                  <Text style={styles.addSectiontext} >Add New Quiz</Text>
              </View>
              <MaterialIcons 
             name='add'
             size={30}
             style={styles.modalToggle}
             onPress={()=>setModalOpen(true)}
             />
          </View>
          
      )
}

const styles=StyleSheet.create({
    modalToggle:{
      color:'#f05454',
      marginBottom:10,
      borderWidth:1,
      borderColor:'#f2f2f2',
      padding:10,
      borderRadius:10,
      alignSelf:'center'
    },
    modalClose:{
        
        marginBottom:30,
    },
    modalContent:{
        flex:1,
    },
    addSection:{
        
        justifyContent:'center',
        alignItems:'center'
    },
    addSectiontext:{
        
      fontSize:20,
      fontWeight:'bold',
      color:'#f05454'
    },
    delete:{
      

    }
})