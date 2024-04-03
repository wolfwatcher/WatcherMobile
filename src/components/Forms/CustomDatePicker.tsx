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
  placeholder: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({...props}) => {
  const [dateString, setDateString] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [date, setDate] = useState(props.date || new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    setDateString(moment(selectedDate).format('YYYY-MM-DD'));
    setDate(selectedDate);
  };

  const showOverlay = () => {
    setShow(true);
  };
  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <View style={{flex: 1, borderRadius: 100}}>
      <TouchableOpacity
        onPress={showOverlay}
        style={styles.inputContainerStyle}>
        {dateString ? (
          <Text style={styles.textStyle}>{dateString}</Text>
        ) : (
          <Text style={styles.placeholderStyle}>{props.placeholder}</Text>
        )}
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
            is24Hour={true}
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
              is24Hour={true}
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
    borderColor: '#CAD3DF',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    height: 50,
  },
  placeholderStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: '#CDCDCD',
    marginHorizontal: 10,
  },
  textStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default CustomDatePicker;
