import React, { Component } from 'react';
import { Text,View,TouchableOpacity,Image } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './ProfileBackgroundStyle';
import { Images } from '../../theme';

class LogIn extends Component {
    constructor(props){
        super(props);
    }
    renderPic() {
        switch(this.props.title){
            case 'login': 
               return ( 
                   <Image 
                        source={Images.profilePic}
                        style= {styles.profilePic}
                    />
                );
            case 'signup':
                return( 
                    <IonIcons 
                        name= 'md-person-add'
                        size={60}
                        color="#ddd"
                    />  
                );     
        }
    }
    render() {
        const { style,title } = this.props;
        return(
            <View style={style}>
                <Image 
                    source= {Images.profileBg}
                    style={styles.profileBackgroundImage}
                >
                    <TouchableOpacity>
                        {this.renderPic()}
                    </TouchableOpacity>
                        
                </Image>
            </View>
        );
    }
}
export default LogIn;