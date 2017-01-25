import React, { Component } from 'react';
import { Text,View } from 'react-native';
import styles from './NavBarStyle';

export default class NavBar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { style,leftButton,title } = this.props;
        return(
            <View style={[styles.navBarContainer,style]}>
                <View style={styles.navBarComponent}> 
                    <View style={styles.leftButton}>
                        {leftButton}
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleTextStyle}>{title}</Text>
                        
                    </View>
                </View>
            </View>
        );
    }
}