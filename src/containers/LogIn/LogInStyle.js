import Dimensions from 'react-native';
import { ApplicationStyles,Colors } from '../../theme';

export default styles = {
    ...ApplicationStyles.screen,
    profileBackgroundImageContainer: {
        flex:1
    },
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
    }
}