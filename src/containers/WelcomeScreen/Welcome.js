import React, { Component } from 'react';
import { Text,View,Image,StatusBar } from 'react-native';
import { Colors,Images } from '../../theme';
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
                        style={{height: 100,width: 100}}
                        resizeMode= 'contain'
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.welcomeText}>Welcome! {"\n"}
                        <Text>React Native</Text>
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.signInContainer}>
                        <Text>Sign In</Text>
                    </View>
                    <View style={styles.signUpContainer}>
                        <Text>Sign Up</Text>
                    </View>
                </View>
            </View>
        );
    }
}