import Dimensions from 'react-native';
import { ApplicationStyles,Colors } from '../../theme';

export default styles = {
    ...ApplicationStyles.screen,
    profileBackgroundImage: {
        backgroundColor: Colors.transparent,
        width: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    addPicIcon: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: '#fff',
        
    }
}