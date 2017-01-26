import React, { Component } from 'react';
import { Text,View,StatusBar,TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { NavBar,ProfileBackground } from '../../components';

class SignUp extends Component {
    leftButton(){
        return(
            <TouchableOpacity onPress= {Actions.welcome}>
                <IonIcons name='md-arrow-back' size={30} color='#fff' />
            </TouchableOpacity>
        )
    }
    render() {
        return(
            <View style={{flex:1}}>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <View>
                    <NavBar 
                    style= {{backgroundColor: '#9b59b6'}}
                    title= "SIGN UP"
                    leftButton= {this.leftButton()}
                />
                </View>
                <View>
                    <ProfileBackground />
                </View>
                
                
                <Text>Sign Up</Text>
            </View>
        );
    }
}

export default SignUp;