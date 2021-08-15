import React,{ useState } from 'react'; 
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyles} from '../../styles/style/global';
import { Formik } from 'formik'; 
import * as yup from 'yup';
import SelectDropdown from 'react-native-select-dropdown';




const Schema=yup.object({
    Title:yup.string().required("Enter Title").min(1),
    Description:yup.string().required("Enter Description").min(2),
    Section:yup.string().required(),
    
})

export default function SectionForm({addContent}){
    const [Start_date, setDate] = useState('');
    let dataa = [
         'Software Development',
         'Full Stack Development',
         'Python Developer'];
    return(
        <View style={globalStyles.container}>
            <Formik initialValues={{Title:'',Description:'',Section:''}}
            validationSchema={Schema}
             onSubmit={(values,actions)=>{
               console.log(values.Title)
               console.log(values.Description)
               console.log(values.Section)
               actions.resetForm();
               addContent(values);
              
             }}>
              {(props)=>(
                  <View>
                      <Text style={{textAlign:'center',fontSize:20,color:'#30475e',marginBottom:10}}><Text style={{color:'#f05454',fontSize:23}}>New</Text> Content</Text>
                      <TextInput 
                      style={globalStyles.inputform}
                      placeholder='Tilte'
                      onChangeText={props.handleChange('Title')}
                      value={props.values.Title}
                      onBlur={props.handleBlur('Title')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.Title && props.errors.Title}</Text>
                       
                      <TextInput 
                      style={globalStyles.inputform}
                      placeholder='Description'
                      onChangeText={props.handleChange('Description')}
                      value={props.values.Description}
                      onBlur={props.handleBlur('Descripyion')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.Description && props.errors.Description}</Text>


                      <SelectDropdown   buttonStyle={globalStyles.inputform}
               	          data={dataa}
                        	onSelect={(selectedItem) => {
                       		props.values.Section=selectedItem
                            	}}/>

                      
                      
                      
                      <View style={{marginTop:20}}><Button title="Create Content"  color="#f05454"  onPress={props.handleSubmit}/></View>
                  </View>
              )}

            </Formik>
        </View>
    )
}