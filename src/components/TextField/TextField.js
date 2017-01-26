import React, { Component } from 'react';
import { Text,View,TextInput } from 'react-native';

export default class TextField extends Component {
    render() {
        return(
            <TextInput 
                placeholder =" Email"
            />
        );
    }
}