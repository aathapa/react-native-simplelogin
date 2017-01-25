import React, { Component } from 'react';
import { Text,View,Image,StatusBar,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors,Images,Fonts } from '../../theme';
import styles from './WelcomeStyles';

export default class App extends Component {
    render() {
        return(
            <View style={styles.mainContainer}>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <Image
                    source={Images.bg}
                    style={styles.backgroundImage}
                />
                <View style={styles.logoStyle}>
                    <Image 
                        source={Images.logo}
                        style={{height: 120,width: 120}}
                        resizeMode= 'contain'
                    />
                    <Text style={styles.reactNativeText}>React Native</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.welcomeText}>Welcome! {"\n"}
                        <Text style={{fontSize:Fonts.size.h5}}>React Native</Text>
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signInContainer} onPress={Actions.login}>
                        <Text style={styles.signInText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpContainer} onPress={Actions.signup}>
                        <Text style={styles.signUpText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}