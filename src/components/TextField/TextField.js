import React, { Component } from 'react';
import { Text,View,TextInput } from 'react-native';
import { FormInput } from 'react-native-elements'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './TextFieldStyle';
import { Colors } from '../../theme';

export default class TextField extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { placeholder,iconName } = this.props;
        return(
            <View style={styles.mainTextView}>
                <FontAwesome name= {iconName} size={20} color='#000' style={styles.textViewImage}/>
                <FormInput
                    containerStyle={styles.formInputContainerStyle}
                    placeholder={placeholder}
                    
                    inputStyle={styles.formInputStyle}
                    underlineColorAndroid={Colors.transparent}
        />
            </View>
            
        );
    }
}