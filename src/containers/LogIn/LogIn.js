import React, { Component } from 'react';
import { Text,View,StatusBar,TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { NavBar } from '../../components';

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
            <View>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <NavBar 
                    style={{backgroundColor: '#3498db'}}
                    leftButton={this.leftButton()}
                    title= 'SIGN IN'
                />
                <Text>Login</Text>
            </View>
        );
    }
}
export default LogIn;