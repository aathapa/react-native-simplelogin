
import { ApplicationStyles,Fonts,Colors } from '../../theme';
export default styles = {
    ...ApplicationStyles.screen,
  mainTextView: {
    flexDirection: 'row',
  },
  formInputContainerStyle: {
    flex: 1,
    borderBottomColor: Colors.transparent,
    marginLeft: 12,
  },
  formInputStyle: {
    fontFamily: Fonts.type.bold,
  },
  textViewImage: {

    marginLeft: 10
  }
}