import * as React from 'react';
import HomeScreen from "./views/home";
import RecentView from "./views/recentView";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Recents" component={RecentView} />
        <Drawer.Screen name="PodCasts" component={RecentView} />
        <Drawer.Screen name="Favorite" component={HomeScreen} />
        <Drawer.Screen name="Top Stations" component={RecentView} />
        <Drawer.Screen name="Discover" component={RecentView} />
        <Drawer.Screen name="Recommended" component={RecentView} />
        <Drawer.Screen name="Bible" component={RecentView} />
        <Drawer.Screen name="Quran" component={RecentView} />
        <Drawer.Screen name="Pop Music" component={RecentView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
