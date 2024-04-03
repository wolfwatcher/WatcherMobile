import React, {FC, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

interface CustomDatePickerProps extends ViewProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  date,
  onDateChange,
  ...props
}) => {
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    hideOverlay();
    if (event.type === 'set') {
      onDateChange(selectedDate);
    }
  };

  const showOverlay = () => {
    setShow(true);
  };
  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <View style={{borderRadius: 100}} {...props}>
      <TouchableOpacity
        onPress={showOverlay}
        style={styles.inputContainerStyle}>
        <Text style={styles.textStyle}>
          {moment(date).format('DD /MM / YYYY')}
        </Text>
      </TouchableOpacity>
      {Platform.OS === 'ios' ? (
        <Overlay
          isVisible={show}
          onBackdropPress={hideOverlay}
          overlayStyle={styles.overlayStyle}>
          <View style={styles.headerStyle}>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={{paddingHorizontal: 15}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={{paddingHorizontal: 15, color: 'green'}}>Done</Text>
            </TouchableOpacity>
          </View>
          <DateTimePicker
            value={date}
            mode={'date'}
            display="default"
            onChange={onChange}
            style={{backgroundColor: 'white'}}
          />
        </Overlay>
      ) : (
        <>
          {show && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display="default"
              onChange={onChange}
              style={{backgroundColor: 'white'}}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#00000066',
  },
  headerStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    height: 50,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'avenir',
    fontSize: 32,
    marginHorizontal: 10,
  },
});

export default CustomDatePicker;
