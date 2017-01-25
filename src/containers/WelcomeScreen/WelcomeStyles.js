import { ApplicationStyles,Colors } from '../../theme/';

export default styles = {
    ...ApplicationStyles.screen,
    mainContainer: {
        paddingTop: 15,
        backgroundColor: Colors.transparent,
        flex:1
    },
    logoStyle: {
        flex: 3,
        alignItems: 'center',
        marginTop: 40
    },
    info: {
        flex: 2
    },
    welcomeText: {
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 0.5,
        flexDirection: 'row',
        
    },
    signInContainer: {
        flex:1,
        backgroundColor: Colors.signInBackgroundColor
    },
    signUpContainer: {
        flex:1,
        backgroundColor: Colors.SignUpBackgroundColor
    }
}

