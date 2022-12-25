import React, {useContext} from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Button from '../components/Button';
import StarsInput from '../components/StarsInput';
import GlobalContext from '../GlobalContext';

const Review = ({navigation, route}) => {
  const [review, setReview] = useState('');
  const [localRating, setLocalRating] = useState(
    route.params.rating ? route.params.rating : 0,
  );
  const {token, setToken} = useContext(GlobalContext);

  const handleSubmit = async () => {
    console.log('placeId: ', route.params.id);
    const response = await fetch(global.apiUrl + 'reviews/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },

      body: JSON.stringify({
        placeId: route.params?.id?.toString(),
        rating: localRating.toString(),
        description: review,
      }),
    });
    const data = await response.json();
    navigation.navigate('home', {
      id: route.params.id,
    });
    console.log('review posted ? ', data);
  };

  return (
    <View style={styles.mainContainer}>
      <StarsInput
        style={styles.starsInput}
        value={localRating}
        onChange={value => {
          setLocalRating(value);
        }}
      />
      <View sx={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What do you think of this place ?"
          onChangeText={text => setReview(text)}
        />
      </View>
      <Button style={styles.button} onPress={handleSubmit}>
        Post Review
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 40,
  },
  starsInput: {
    width: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 7.56,
    padding: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 7.56,
    backgroundColor: 'red',
  },
});

export default Review;
