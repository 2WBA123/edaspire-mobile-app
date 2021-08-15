import React,{ useState } from 'react'; 
import {StyleSheet,TouchableOpacity,Button,TextInput,View,Text} from 'react-native';
import {globalStyles} from '../../styles/style/global';
import { Formik } from 'formik'; 
import * as yup from 'yup';
import DateInput from './dateInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Schema=yup.object({
    Title:yup.string().required("Enter Valid Title").min(1),
    QuizType:yup.string().required("Enter Quiz Type Graded or UnGraded").min(2),
    DeadLine:yup.string().required("Enter Valid  Dead Line").min(2),
    
})

export default function SectionForm({addQuiz}){
    const [Start_date, setDate] = useState('');
    const [active, setActive] = useState(false);
    const [ugactive, setUGActive] = useState(false);
    const onPress = () => setActive(!active);
    const tonPress = () => setUGActive(!ugactive);

  const gbuttonStyle = {
    backgroundColor: active ? '#f05454' : 'white'
  };
  const gbuttonTextStyle = {
    color: active ? 'white' : '#f05454'
  };

  const ugbuttonStyle = {
    backgroundColor: ugactive ? '#f05454' : 'white'
  };
  const ugbuttonTextStyle = {
    color: ugactive ? 'white' : '#f05454'
  };
  
    return(
        <View style={globalStyles.batchFormcontainer}>
            <Formik initialValues={{Title:'',QuizType:'',DeadLine:''}}
            validationSchema={Schema}
             onSubmit={(values,actions)=>{
               console.log(values)
               actions.resetForm();
               addQuiz(values);
              
             }}>
              {(props)=>(
                  <View>  
                      <Text style={{textAlign:'center',fontSize:20,color:'#30475e',marginBottom:10}}>Create <Text style={{color:'#f05454',fontSize:23}}>Quiz</Text> </Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                      <TouchableOpacity
                       style={[gbuttonStyle,styles.button]}
                        onPress={onPress}
                         >
                         <Text style={[styles.buttonText,gbuttonTextStyle]} >Graded</Text>
                       </TouchableOpacity>
                       <TouchableOpacity
                       style={[ugbuttonStyle,styles.button]}
                        onPress={tonPress}
                         >
                         <Text style={[styles.buttonText,ugbuttonTextStyle]} >UnGraded</Text>
                       </TouchableOpacity>
                      </View>

                      <TextInput 
                      style={globalStyles.inputform}
                      placeholder='Title'
                      onChangeText={props.handleChange('Title')}
                      value={props.values.Title}
                      onBlur={props.handleBlur('Title')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.Title && props.errors.Title}</Text>
                                        
                      <DateInput />
                                            
                      <Text style={{marginTop:10,justifyContent:'center',alignSelf:'center'}}><Button  title="Create Quiz"  color="#f05454"  onPress={props.handleSubmit}/></Text>
                  </View>
              )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop:5,
      borderRadius: 8,
      padding: 6,
      height: 50,
      width: wp('40%'),
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    buttonText: {
      fontSize: 16,
      fontWeight:'bold',
      color: 'white',
    },
  });