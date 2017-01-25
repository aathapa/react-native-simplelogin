import React, { Component } from 'react';
import { Text,View,StatusBar } from 'react-native';

class LogIn extends Component {
    render() {
        return(
            <View>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <Text>Login</Text>
            </View>
        );
    }
}
export default LogIn;