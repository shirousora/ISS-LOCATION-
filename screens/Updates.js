import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class UpdateScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style= {styles.droidSafeArea} />

                <View style = {styles.titleBar}>
                  <Text>¡Pantalla de actualizaciones!</Text>
                </View>

            </View>
        )
    }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  }
})