import * as React from 'react' ;
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av'

export default class PhonicSound extends React.Component {
    playSound = async (sound) => {
        var soundLink = "https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/" + sound + ".mp3" 
        await Audio.Sound.createAsync({uri: soundLink}, {shouldPlay: true})
    }
    render () {
        return(
            <TouchableOpacity style= {styles.chunkButton} onPress = {() => {
                this.playSound(this.props.soundchunk)
            }}> 
                <Text style= {styles.displayText}> {this.props.wordchunk} </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black'
  },

  chunkButton:{
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: "cyan"
  }
});