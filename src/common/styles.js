import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window')

const CommonStyles = StyleSheet.create({
    headerStyle: {
        textAlign: 'center',
        fontSize: 22,
        color: '#333A42',
        fontWeight: '500'
    },
    searchTextInputStyle: {
        height: 50,
        borderColor: '#CCCCCC',
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        marginHorizontal: 5,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    textInputHeaderStyle: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 5,
        fontSize: 15,
        color: '#333A42'
    },
    textHeaderStyle: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 14,
        color: '#707070'
    },
    textInputStyle: {
        height: 50,
        borderColor: '#CCCCCC',
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        marginHorizontal: 15,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    buttonStyle: {
        height: 50,
        marginTop: 20,
        marginHorizontal: 15,
        backgroundColor: '#259F59',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 14
    },
    cartButtonStyle: {
        height: 30,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#259F59',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableTextstyle: {
        paddingTop: 20,
        fontSize: 13,
    },
    touchableTextstyle: {
        paddingTop: 20,
        fontSize: 13,
    },
    listStyle: {
        minHeight: 200,
        // maxHeight: 220,
        width: width / 2 - 15,
        marginLeft: 10,
        marginTop: 15,
        elevation: 1,
        shadowOpacity: 0.3,
        backgroundColor: '#fff',
        borderColor: '#E8E8E8',
        borderWidth: 0.5,
    },
    ImageViewStyle: {
        flex: 3.2,
    },
    IconStyle: {
        height: 75,
        width: 95
    },
    NameViewStyle: {
        flex: 6.8,
    },
    NameTextStyle: {
        fontSize: 16,
        paddingHorizontal: 5,
        color: '#222222'
    },
    DescriptionTextStyle: {
        fontSize: 13,
        paddingHorizontal: 5,
        color: '#555555'
    },
    cartlistStyle: {
        minHeight: 120,
        marginHorizontal: 10,
        marginTop: 15,
        elevation: 1,
        shadowOpacity: 0.3,
        backgroundColor: '#fff',
        borderColor: '#E8E8E8',
        borderWidth: 0.5,
        flexDirection: 'row'
    }
})

export { CommonStyles };