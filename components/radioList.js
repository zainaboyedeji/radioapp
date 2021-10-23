import React,{useState} from "react";
import { View, StyleSheet, Text, Image,TouchableHighlight,ScrollView, ListViewBase } from "react-native";

function RadioList({radio,setRadio}) {
  
  const list = [       
    {
       key: "0",
       name: "Cool Fm",
       image: "data:image/png;base64,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",
    },
     {
       key: "1",
       name: "BBC Hausa",
        image: "data:image/png;base64,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",
    },
    {
      key: "2",
      name: "Classic Fm",
      image: "https://www.radio.net/images/broadcasts/50/af/121366/1/c300.png",
   },
    {
      key: "3",
      name: "Inspiration Fm",
       image: "data:image/png;base64,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",
   },
   {
    key: "4",
    name: "Lagos Talks",
    image: "https://www.radio.net/images/broadcasts/95/20/121365/1/c300.png",
 },
  {
    key: "5",
    name: "Nigerian Info",
     image: "http://nigeriafms.com/wp-content/uploads/2016/05/Nigeriainfo-FM-PH-Live-Streaming-Online.png",
 },
 {
  key: "6",
  name: "RFI Fm",
  image: "https://play-lh.googleusercontent.com/0jUIFASWEr_nDKedibiA6fRJtZaLYfdlKN7JWi597DlpdnvUN386MObJx1Kg6TxnV-t0",
},
{
  key: "7",
  name: "Soundcity Fm",
   image: "https://soundcity.tv/wp-content/uploads/soundcity-black-logo.png",
},
{
  key: "8",
  name: "Naija Fm",
   image: "https://www.radio.net/images/broadcasts/27/dd/121363/1/c300.png",
},
{
  key: "9",
  name: "City Fm",
   image: "https://cdn-denlg.nitrocdn.com/vrXDofaobDsnYejlgzOiGfxfznOAbwmN/assets/static/optimized/wp-content/uploads/2020/06/7e4e2b0bd5b86270e3d4887bde191e04.cropped-city-new-logo.png",
},
{
  key: "10",
  name: "Fresh Fm",
   image: "https://cdn-radiotime-logos.tunein.com/s163212g.png",
},
  ];
 
  const onPressButton = (item) => {
   setRadio({
     name:item.name,
     image:item.image
   });
   
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
       {list.map((item) => {
         return(
<TouchableHighlight onPress={() =>  onPressButton(item)} key={item.key}>
      <View style={styles.boxStyle}>
        <Text>{item.name}</Text>
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      </TouchableHighlight>
         )})}
      {/* <TouchableHighlight onPress={() =>  onPressButton("BBCHausa")}>
      <View style={styles.boxStyle}>
        <Text>BBC Hausa</Text>
        <Image
          source={require("../images/bbchausa.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      </TouchableHighlight>
      <View style={styles.boxStyle}>
        <Text>Classic Fm </Text>
        <Image
          source={require("../images/classicfm.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>Inspiration Fm</Text>
        <Image
          source={require("../images/inspirationfm.jpg")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>Lagos Talks</Text>
        <Image
          source={require("../images/lagostalks.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>Nigerian Info</Text>
        <Image
          source={require("../images/nigeriainfo.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>RFI Fm</Text>
        <Image
          source={require("../images/rfi.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>Soundcity Fm</Text>
        <Image
          source={require("../images/soundcity.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>Naija Fm</Text>
        <Image
          source={require("../images/naijafm.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>City Fm</Text>
        <Image
          source={require("../images/cityfm.jpg")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>Fresh Fm</Text>
        <Image
          source={require("../images/freshfm.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.boxStyle}>
        <Text>Cool Fm</Text>
        <Image
          source={require("../images/beatfm.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View> */}
    </View>
  );
}

export default RadioList;

const styles = StyleSheet.create({
  boxStyle: {
    height: 100,
    width: 100,
    marginBottom: 40,
  },
});
