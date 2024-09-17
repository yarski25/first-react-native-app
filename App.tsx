/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
  DeviceEventEmitter,
} from 'react-native';

import {Colors, DebugInstructions} from 'react-native/Libraries/NewAppScreen';
import Section from 'components/Section/Section';
import Header from 'components/Header/Header';
import Back from 'components/Icons/Back/Back';
import Avatar from 'assets/icons/svg/avatar.svg';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {NativeModules} from 'react-native';
import CalendarModule from './CalendarModule';

const {NmeaService} = NativeModules;

// function findNumberOfSatellites(context){
//     NativeModules.ToastExample.show("It's Starting to find satellites!", 1);
//     var count = "searching...";
//     NativeModules.ToastExample.getCoors();
//     context.setState({satellites : count});

//     }

// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // state to hold location
  const [location, setLocation] = useState<GeolocationResponse | null>(null);

  // Geolocation.setRNConfiguration(config);

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(null);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };

  const createCalendar = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'testName',
        'testLocation',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const startNmea = () => {
    NmeaService.start();

    DeviceEventEmitter.addListener('onNmeaReceive', event => {
      console.log(event);

      // will output:
      // {
      //   timestamp: 1543940192000,
      //   message: "$GLGSV,3,1,11,72,62,303,,73,59,028,,74,59,264,,71,54,180,*6"
      // }
    });
  };

  const stopNmea = () => {
    NmeaService.stop();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header
          leftNode={<Back color="black" width={32} height={32} />}
          headerText="Home"
          rightNode={<Avatar width={32} height={32} />}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* <Section title="Step One">
            Edit <Text style={{fontWeight: 700}}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section> */}
          <Section title="See Your Geo Data">
            <View
              style={{
                borderRadius: 10,
              }}>
              <Button title="Get Location" onPress={getLocation} />
            </View>
            {'\n\n'}
            <Text>
              Latitude:{' '}
              {location?.coords.latitude
                ? location.coords.latitude.toFixed(3)
                : null}
            </Text>
            {'\n'}
            <Text>
              Longitude:{' '}
              {location?.coords.longitude
                ? location.coords.longitude.toFixed(3)
                : null}{' '}
            </Text>
            <View
              style={{
                marginTop: 10,
                padding: 10,
                borderRadius: 10,
                width: '40%',
              }}></View>
          </Section>
          <Section title="See Your Calendar Data">
            <View
              style={{
                borderRadius: 10,
              }}>
              <Button title="Create Calendar" onPress={createCalendar} />
            </View>
            {'\n\n'}
            <Text>
              Text 1:{' '}
              {location?.coords.latitude
                ? location.coords.latitude.toFixed(3)
                : null}
            </Text>
            {'\n'}
            <Text>
              Text 2:{' '}
              {location?.coords.longitude
                ? location.coords.longitude.toFixed(3)
                : null}{' '}
            </Text>
          </Section>
          <Section title="See Your NMEA Data">
            <View
              style={{
                borderRadius: 10,
              }}>
              <Button title="Start" onPress={startNmea} />
            </View>
            {'\n'}
            <View
              style={{
                borderRadius: 10,
              }}>
              <Button title="Stop" onPress={stopNmea} />
            </View>
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
            {'\n\n'}
            <Text
              style={{fontStyle: 'italic', color: 'blue'}}
              onPress={() => {
                Linking.openURL('https://reactnative.dev/docs/getting-started');
              }}>
              reactnative.dev
            </Text>
          </Section>
          {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
