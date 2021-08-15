import React,{ useState } from 'react'; 
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyles} from '../../styles/style/global';
import { Formik } from 'formik'; 
import * as yup from 'yup';
import TimeInput from '../CreateCourse/timeinput';
import DateInput from '../CreateCourse/dateInput';
import DateTimePicker from '@react-native-community/datetimepicker';



const Schema=yup.object({
    Batch_no:yup.string().required("Enter Valid batch no").min(1),
    Start_date:yup.string().required("Enter valid date").min(2),
    Start_Time:yup.string().required("Enter Valid time").min(2),
    Class_duration:yup.string().required("Enter Valid class duration").min(2),
    
})

export default function SectionForm({addBatch}){
    const [Start_date, setDate] = useState('');
    return(
        <View style={globalStyles.batchFormcontainer}>
            <Formik initialValues={{Batch_no:'',Start_date:'',Start_Time:'',Class_duration:''}}
            validationSchema={Schema}
             onSubmit={(values,actions)=>{
               console.log(values)
               actions.resetForm();
               addBatch(values);
              
             }}>
              {(props)=>(
                  <View>
                      <Text style={{textAlign:'center',fontSize:20,color:'#30475e',marginBottom:10}}>Create <Text style={{color:'#f05454',fontSize:23}}>New</Text> Batch</Text>
                      <TextInput 
                      style={globalStyles.inputform}
                      placeholder='Batch no'
                      onChangeText={props.handleChange('Batch_no')}
                      value={props.values.Batch_no}
                      onBlur={props.handleBlur('Batch_no')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.Batch_no && props.errors.Batch_no}</Text>
                  
                      
                      <DateInput />
                      <TimeInput />              
                       

                      <TextInput 
                      style={globalStyles.inputform}
                      placeholder='Class duration in minutes'
                      onChangeText={props.handleChange('Class_duration')}
                      value={props.values.Class_duration}
                      onBlur={props.handleBlur('Class_duration')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.Class_duration && props.errors.Class_duration}</Text>
                      
                      
                      <Button title="Create Batch"  color="#f05454"  onPress={props.handleSubmit}/>
                  </View>
              )}

            </Formik>
        </View>
    )
}