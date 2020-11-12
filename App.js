import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import db from './localDB' ;
import PhonicSound from './components/phonicSound' ;

export default class App extends React.Component {
  constructor() {
    super() 
    this.state = {
     text: "",
     displayText: "",
     chunks: [],
     phonicsounds: [],
     buttonColor: "black"
    }

  }
  changeColor = () => {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)]
  }
  this.setState({
    buttonColor: color
  })
}
  componentDidMount() {
    this.changeColor()
}
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.buttonColor}]}>
        <Header
          backgroundColor = {"blue"}
          centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff', fontSize: 30, fontWeight: 'bold', color: "yellow" } }}
        />
        <TextInput onChangeText = {(item) => {
          this.setState({
            text: item
          })
        }}
        style= {styles.inputBox}/>
        <TouchableOpacity onPress = {() => {
          console.log(db[this.state.text])
          var word = this.state.text.toLowerCase().trim()
          db[word] ? (
          this.setState({
            chunks: db[word].chunks
          }),
          this.setState({
            phonicsounds: db[word].phones
          })
        ) : alert("BE warned VIRUS!!!")
        }}
        style= {styles.goButton}> <Text style= {styles.buttonText}> GO! </Text> </TouchableOpacity> 
          <View>
            {this.state.chunks.map((item, index) => {
            return(
              <PhonicSound wordchunk= {this.state.chunks[index]} soundchunk= {this.state.phonicsounds[index]}/>
            )
            })
  }
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,51)',
  },
  inputBox: {
    marginTop: 100,
    width: '20%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    fontSize: 19,
    fontWeight: 'bold',
    color: "gold"
  },
  goButton: {
    width: '25%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 30,
    borderRadius: 10,
    backgroundColor: "black"
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: "white"
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});

