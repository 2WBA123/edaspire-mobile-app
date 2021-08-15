import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Formik } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {globalStyles} from '../../styles/style/global';

export default function Example() {
  return (
    <Formik initialValues={{ myTime: moment().format('hh:mm a')}} onSubmit={values => console.log(values.myTime)}>
      {({ handleSubmit, values, setFieldValue }) => (
        <MyForm values={values} setFieldValue={setFieldValue}  handleSubmit={handleSubmit} />
      )}
    </Formik>
  );
}

export const MyForm = props => {
  const { handleSubmit, values, setFieldValue} = props;
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
 
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hidePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = time => {
    setFieldValue('myTime', moment(time).format('hh:mm a'))
    hidePicker();
  }; 
  return (
    <View>
      <Text style={globalStyles.inputform} onPress={showTimePicker}>{moment(values.myTime).format('hh:mm a')}</Text>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        time={moment(values.myTime).toDate()}
      />
      <Button title="Confirm Time" color="#f05454" onPress={handleSubmit} />
    </View>
  );
}