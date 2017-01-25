import React, { Component } from 'react';
import { Text,View,StatusBar } from 'react-native';

class SignUp extends Component {
    render() {
        return(
            <View>
                <View>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <Text>Sign Up</Text>
            </View>
        );
    }
}

export default SignUp;