
import { ApplicationStyles,Fonts,Colors } from '../../theme';
export default styles = {
    ...ApplicationStyles.screen,
  mainTextView: { 
      flexDirection: 'row',
  },
  formInputContainerStyle: {
    flex: 2,
    marginTop: 20,
    borderBottomColor: Colors.transparent,
    marginLeft: 12,
  },
  formInputStyle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.mediumSmall
  },
  textViewImage: {
      flex:0.2,
       marginLeft: 10,
       marginTop: 25
  }
}