import React, {useState} from 'react';
import {globalStyles} from '../../styles/global';
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const Schema=yup.object({
  Title:yup.string().required('Enter valid Title').min(1),
  Description:yup.string().required("Description is required").min(80, "Description is too short - should be 80 chars minimum"),
  Price:yup.string().required("Enter valid price"),
  Duration:yup.string().required("Enter valid Duration "),
  Category:yup.string().required("Enter Time Duration in Weeks")

})



const Details = ({navigation}) => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Category, setCategory] = useState('');
  

  let dataa = [
     'Software Development',
     'Full Stack Development',
     'Python Developer'];
    

  

  return (
    <View style={styles.mainBody}>
  
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        
        <KeyboardAvoidingView enabled>
            
          <Formik initialValues={{Title:'',Description:'',Category:'',Price:'',Duration:''}}
            validationSchema={Schema}
             onSubmit={(values,actions)=>{
              setTitle(values.Title);
              setDescription(values.Description);
               console.log(Title);
               console.log(Description);

               actions.resetForm();              
             }}>
              {(props)=>(
                  <View>                     
                      <TextInput 
                      style={globalStyles.input}
                      placeholder='Title'
                      onChangeText={props.handleChange('Title')}                      
                      onBlur={props.handleBlur('Title')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.Ttile && props.errors.Title}</Text>
                      
                      
                      <TextInput 
                      style={globalStyles.input}
                      multiline = {true}
                      numberOfLines = {4}
                      placeholder='Description'
                      onChangeText={props.handleChange('Description')}
                      onBlur={props.handleBlur('Description')}
                      />
                     <Text style={globalStyles.errorText}>{props.touched.Description && props.errors.Description}</Text>
                      
                     <SelectDropdown   buttonStyle={globalStyles.input}
               	          data={dataa}
                        	onSelect={(selectedItem) => {
                       		console.log(selectedItem)
                            	}}  	
                        />
                         
                         <Text style={globalStyles.errorText}>{props.touched.Description && props.errors.Description}</Text>

                    
                      <TextInput 
                      style={globalStyles.input}
                      placeholder='Price'
                      onChangeText={props.handleChange('Price')}
                      onBlur={props.handleBlur('Price')}
                      />
                     <Text style={globalStyles.errorText}>{props.touched.Price && props.errors.Price}</Text>
                      
                     <TextInput 
                      style={globalStyles.input}
                      placeholder='Duration'
                      onChangeText={props.handleChange('Duration')}
                      onBlur={props.handleBlur('Duration')}
                      />
                     <Text style={globalStyles.errorText}>{props.touched.Duration && props.errors.Duration}</Text>

                     

                      <TouchableOpacity
                       style={styles.buttonStyle}
                       activeOpacity={0.5}
                       onPress={props.handleSubmit}>
                        <Text style={styles.buttonTextStyle}>Save</Text>
                      </TouchableOpacity>
            
                  </View>
              )}

            </Formik>         
            </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#f05454',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#f05454',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    margin: 10
},
});