import React from 'react';
import { Text, View, TouchableOpacity, TextInput,StyleSheet, KeyboardAvoidingView} from 'react-native';

import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      title: '', 
      author: '',
      story: ''
    }
  }
  submitStory=async()=>{
    await db.collection("stories").add({
      'title': this.state.title,
      'author': this.state.author, 
      'story': this.state.story


    })
      alert("Story Submitted")


  }
  render(){
    
      return(
        <KeyboardAvoidingView style={styles.container}>
              <View style={styles.container} behavior= "padding" enabled/>

         
           <Text style={{textAlign:'center', fontSize:30, fontWeight: "bold"}}>Bedtime Stories</Text> 
           <TextInput style={styles.title} placeholder="Story Title"  onChangeText={title => {
            this.setState({ title:title });
          }}
          value={this.state.title}/>
<View style={styles.inputView}>
           <TextInput style={styles.title} placeholder="Author"  onChangeText={author => {
            this.setState({ author:author });
          }}
          value={this.state.author}/>
          </View>
        
            <TextInput 
              style={styles.inputBox}
              placeholder="STORY" onChangeText={story => {
            this.setState({ story:story });

          }}
                      value={this.state.story}
 />
 
              <TouchableOpacity
               style={styles.submitButton} onPress={async()=>{
                 this.submitStory();
                 this.setState({
                    title: '',
                    author: '',
                   story: ''

                 })
               }}>
              <Text style={styles.submitButtonText}>Submit</Text>
             </TouchableOpacity>
       
      </KeyboardAvoidingView>
      )
    }
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
   inputBox:{
      
      width: 300,
      height: 350,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20
    },
    submitButton:{
      backgroundColor: '#FBC02D',
      width: 100,
      height:50
    },
    submitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: 'white'
    },
    title:{
    width: 300,
    height: 30,
    borderWidth: 1.5,

    fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    margin: 10
  },
  
});