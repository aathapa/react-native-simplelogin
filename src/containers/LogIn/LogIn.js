import React, { Component } from 'react';
import { Text,View,StatusBar,TouchableOpacity,Image,dismisskeyboard,TouchableWithoutFeedback } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { NavBar,TextField,ProfileBackground,Button } from '../../components';
import styles from './LogInStyle';
import { Images,Colors } from '../../theme';

class LogIn extends Component {
    constructor(props){
        super(props);
    }
    leftButton(){
        return(
            <TouchableOpacity onPress= {Actions.welcome}>
                <IonIcons name='md-arrow-back' size={30} color='#fff' />
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={()=> dismisskeyboard()}>
                <View style={{flex:1}}>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <View style={{flex: 0.42}}>
                    <NavBar 
                        style={{backgroundColor: Colors.signInBackgroundColor}}
                        leftButton={this.leftButton()}
                        title= 'SIGN IN'
                    />
                </View>
                <View style= {{flex: 1}}>
                    <ProfileBackground 
                        title= 'login'
                    />
                </View >
                
                <View style={[styles.logInView,{flex:2}]}>
                    <TextField iconName="user-circle-o" placeholder= "USERNAME" />
                    <View style={styles.separator} />
                    <TextField 
                        iconName="lock" 
                        placeholder= "PASSWORD" 
                        secureTextEntry= {true}

                     />
                    <View style={styles.separator} />
                </View>
                <View>
                    <Button 
                        style={{backgroundColor: Colors.signInBackgroundColor}}
                        title= 'SIGN IN'
                    />
                </View>
            </View>
            </TouchableWithoutFeedback>
            
        );
    }
}
export default LogIn;