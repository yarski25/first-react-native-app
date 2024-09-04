/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Section from 'components/Section/Section';
import Header from 'components/Header/Header';
import Back from 'components/Icons/Back/Back';
import Avatar from 'assets/icons/svg/avatar.svg';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Avatar />
          <Section title="Step One">
            Edit <Text style={{fontWeight: 700}}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
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
