import React, {useState, useContext} from 'react';
import GlobalContext from '../GlobalContext';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Button from '../components/Button';
import {set} from 'react-native-reanimated';

const NewTrip = ({navigation, route}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {token, setToken} = useContext(GlobalContext);

  const [tripName, setTripName] = useState('');

  console.log('route', route);

  const bookActivity = async (activityId, tripId, navigation, token) => {
    try {
      const response = await fetch(
        global.apiUrl + 'trips/' + tripId + '/activities',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            activityId,
          }),
        },
      );

      const data = await response.json();
      navigation.navigate('ActivityBooked');
    } catch (error) {
      console.log('error', error);
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting === false) {
      setIsSubmitting(true);
      try {
        const response = await fetch(global.apiUrl + 'trips/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            name: tripName,
            description: tripName,
          }),
        });

        const data = await response.json();

        const activityBookingData = await bookActivity(
          route.params.activityId,
          data.id,
          navigation,
          token,
        );
        console.log('activityBookingData', activityBookingData);
        navigation.navigate('ActivityBooked');
      } catch (error) {
        console.log(error);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give your trip a name</Text>
      <TextInput
        style={styles.input}
        placeholder="Trip Name"
        onChangeText={text => setTripName(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, styles.secondaryButton]}
          textStyle={styles.buttonText}
          onPress={() => {
            navigation.navigate('pickTrip', {
              activityId: route.params.activityId,
            });
          }}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          Save
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent',
  },

  button: {
    width: 130,
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#007AFF',
  },
});

export default NewTrip;
