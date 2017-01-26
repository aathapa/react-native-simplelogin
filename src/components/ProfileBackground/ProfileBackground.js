import React, { Component } from 'react';
import { Text,View,TouchableOpacity,Image } from 'react-native';
import styles from './ProfileBackgroundStyle';
import { Images } from '../../theme';

class LogIn extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { style } = this.props;
        return(
            <View style={style}>
                <Image 
                    source= {Images.profileBg}
                    style={styles.profileBackgroundImage}
                >
                    <TouchableOpacity>
                        <Image 
                            source={Images.profilePic}
                            style= {styles.profilePic}
                        />
                    </TouchableOpacity>
                        
                </Image>
            </View>
        );
    }
}
export default LogIn;