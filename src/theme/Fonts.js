import { Platform } from 'react-native';

const type = {
    regular : 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
    light: 'OpenSans-Light',
    semiBold: 'OpenSans-Semibold',
    extraBold: 'OpenSans-ExtraBold'
}

const size = {
    ...Platform.select({
        ios:{
            h1: 38,
            h2: 34,
            h3: 30,
            h4:26,
            h5: 20,
            h6:19,
            regular: 17,
            medium: 14,
            mediumSmall: 12,
            small: 10,
            tiny:9,
            smallest: 8
        },
        android: {
            h1: 40,
            h2: 36,
            h3: 32,
            h4:28,
            h5: 22,
            h6:21,
            regular: 19,
            medium: 16,
            mediumSmall: 12,
            small: 12,
            tiny:11,
            smallest: 9
        }
    })
}

export default { type,size };
