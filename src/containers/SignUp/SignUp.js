import React, { Component } from 'react';
import { Text,View,StatusBar,TouchableOpacity,TouchableWithoutFeedback,dismisskeyboard } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { NavBar,ProfileBackground,TextField,Button } from '../../components';
import styles from './SignUpStyle';
import { Colors } from '../../theme';

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
            <TouchableWithoutFeedback onPress={()=> dismisskeyboard()}>
                <View style={{flex:1}}>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <View style={{flex: 0.42}}>
                    <NavBar 
                        style= {{backgroundColor: Colors.SignUpBackgroundColor}}
                        title= "SIGN UP"
                        leftButton= {this.leftButton()}
                />
                </View>
                <View style={{flex: 1}}>
                    <ProfileBackground
                        title= 'signup'
                    />
                </View>
                <View style={[styles.signUpView,{flex: 2}]}>
                    <TextField iconName='user-circle-o' placeholder="FULL NAME" />
                    <View style={styles.separator} />
                    <TextField iconName='envelope-o' placeholder="EMAIL" />
                    <View style={styles.separator} />
                    <TextField iconName='lock' placeholder="PASSWORD" secureTextEntry={true}/>
                    <View style={styles.separator} />
                    <TextField iconName='transgender' placeholder="GENDER" />
                    <View style={styles.separator} />
                    <TextField iconName='gift' placeholder="BIRTHDAY" />
                    <View style={styles.separator} />
                </View>
                <View>
                    <Button 
                        title='SIGN UP'
                        style= {{backgroundColor: Colors.SignUpBackgroundColor}}
                    />
                </View>
            </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

export default SignUp;