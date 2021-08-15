import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Formik } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {globalStyles} from '../../styles/style/global';

export default function Example() {
  return (
    <Formik initialValues={{ myDate: moment().format('YYYY-MM-DD')}} onSubmit={values => console.log(values.myDate)}>
      {({ handleSubmit, values, setFieldValue }) => (
        <MyForm values={values} setFieldValue={setFieldValue}  handleSubmit={handleSubmit} />
      )}
    </Formik>
  );
}

export const MyForm = props => {
  const { handleSubmit, values, setFieldValue} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setFieldValue('myDate', moment(date).format('YYYY-MM-DD'))
    hideDatePicker();
  };

  return (
    <View>
      <Text style={globalStyles.inputform} onPress={showDatePicker}>{moment(values.myDate).format('YYYY-MM-DD')}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"

        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={moment(values.myDate).toDate()}
      />
      <Button title="Confirm Date" color="#f05454" onPress={handleSubmit} />

      
    </View>
  );
}