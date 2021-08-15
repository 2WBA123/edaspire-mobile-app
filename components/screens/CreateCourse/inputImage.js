import React, {Component} from 'react';
import {Formik} from 'formik';
import * as ImagePicker from 'react-native-image-picker';
import {
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';

export default class App extends Component {
    
  handleSubmit = (values) => {
    let data = new FormData();
    data.append("image1", values.photo1);
    return fetch(baseUrl, {
      method: "post",
      headers: new Headers({
        Accept: "application/json",
        Authorization: "Bearer " + token,
      }),
      body: data,
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  };
  render(){
    let options = {
        title: 'Select Image',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    return(
      <Formik initialValues={{ image1: '' }} onSubmit={this.handleSubmit}>
        {(formProps) => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>Image 1:</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  backgroundColor: '#04b040',
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  alignItems: 'center',
                  shadowColor: '#E67E22',
                  shadowOpacity: 0.8,
                  elevation: 8
                }}
                onPress={() => {
                  ImagePicker.showImagePicker(options, (response) => {
                    if (response.uri) {
                      let data = {
                        name: response.fileName,
                        type: response.type,
                        uri:
                          Platform.OS === 'android'
                          ? response.uri
                          : response.uri.replace('file://', ''),
                      };
                      formProps.setFieldValue('image1', data);
                    }
                  });
                }}
              >
                <Text>Open</Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Log In"
              onPress={formProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}