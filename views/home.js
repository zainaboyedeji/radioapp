import * as React from 'react';
import { Text, View } from 'react-native';
import SearchRadio from "../components/searchRadio";
import RadioList from "../components/radioList";

function HomeScreen() {
  return (
    <View>
		<SearchRadio/>
    <RadioList/>
     
    </View>
  );
}

export default HomeScreen;