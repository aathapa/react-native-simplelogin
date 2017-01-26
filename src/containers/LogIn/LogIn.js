import React, { Component } from 'react';
import { Text,View,StatusBar,TouchableOpacity,Image } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { NavBar,TextField,ProfileBackground,Button } from '../../components';
import styles from './LogInStyle';
import { Images } from '../../theme';

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
            <View style={{flex:1}}>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <View style={{flex: 0.42}}>
                    <NavBar 
                    style={{backgroundColor: '#3498db'}}
                    leftButton={this.leftButton()}
                    title= 'SIGN IN'
                />
                </View>
                <View style= {{flex: 1}}>
                    <ProfileBackground />
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
                        style={{backgroundColor: '#3498db'}}
                        title= 'SIGN IN'
                    />
                </View>
            </View>
        );
    }
}
export default LogIn;