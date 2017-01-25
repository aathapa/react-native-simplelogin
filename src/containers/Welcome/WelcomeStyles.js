import { ApplicationStyles,Colors,Fonts } from '../../theme/';

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
    reactNativeText: {
        color: Colors.whiteText,
        fontSize: Fonts.size.h4,
        fontFamily: Fonts.type.semiBold
    },
    info: {
        flex: 2
    },
    welcomeText: {
        textAlign: 'center',
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.h3,
        color: Colors.whiteText
    },
    buttonContainer: {
        flex: 0.5,
        flexDirection: 'row',
        
    },
    signInContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.signInBackgroundColor
    },
    signUpContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.SignUpBackgroundColor
    },
    signInText: {
        color: Colors.whiteText,
        fontFamily: Fonts.type.bold
    },
    signUpText: {
        color: Colors.whiteText,
        fontFamily: Fonts.type.bold
    }
}

