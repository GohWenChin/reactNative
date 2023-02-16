import React from 'react';
import { View, Text, Button, StyleSheet,Image, Alert,TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
    return (
      // <View style={styles.container}>
      //   <Text>Profile Screen</Text>
      //   <Button
      //     title="Click Here"
      //     onPress={() => alert('Button Clicked!')}
      //   />
      // </View>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.contentframe}>
        <Image
            style={styles.contentframemainimage}
            source={require('../assets/123.jpg')}
        />
        <Text style={styles.contentframetext}>
        Redeem credit to play casino game
        </Text>
        
        <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => Alert.alert("Cancel Pressed")}
                >
               <Text style={styles.contentframelink}>
                        Learn More
                        </Text>
                </TouchableOpacity>
        </View>
       
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  contentframe: {
    margin: 10,
    width: '96%',
    backgroundColor: '#fff',
    color: '#333',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    // box-shadow: 0 2px 5px rgba(0,0,0,0.2),
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    lineHeight: 0,
    overflow: 'hidden'

  
},
contentframemainimage: {
  width: '100%',
  // minHeight: 50,
  // maxHeight: '50%',
  // width: null,
  // height: 100,
  backgroundColor: '#555',
  resizeMode: 'contain'

},
contentframetext: {
  margin: 10,
  fontSize: 13,
  fontFamily: "arial"
},
contentframelink: {
  margin: 10,
  backgroundColor: '#0c0',
  // font: bold 14px/1.2em arial,
  textAlign: 'center',

}
});
