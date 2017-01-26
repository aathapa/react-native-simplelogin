import React, { Component } from 'react';
import { Text,View,TouchableOpacity } from 'react-native';
import styles from './ButtonStyle';

export default class ButtonPlatform extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { style,title } = this.props;
        return(
            <TouchableOpacity style={[styles.buttonStyle,style]}>
                <Text style={styles.buttonTextStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
} 