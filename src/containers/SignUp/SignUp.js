import React, { Component } from 'react';
import { Text,View,StatusBar,TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { NavBar } from '../../components';

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
            <View>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <NavBar 
                    style= {{backgroundColor: '#9b59b6'}}
                    title= "SIGN UP"
                    leftButton= {this.leftButton()}

                />
                <Text>Sign Up</Text>
            </View>
        );
    }
}

export default SignUp;