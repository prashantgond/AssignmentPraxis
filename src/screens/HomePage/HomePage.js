import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground, Dimensions, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');


class HomePage extends Component {

    state = {
        listData: [
            {
                id: 0,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: require('../../assets/icon/Image1.jpeg'),
            },
            {
                id: 1,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: require('../../assets/icon/Image2.jpeg'),
            },
            {
                id: 2,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: require('../../assets/icon/Image3.jpeg'),
            },
            {
                id: 3,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: require('../../assets/icon/Image4.jpeg'),
            },
            {
                id: 4,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: require('../../assets/icon/Image5.jpeg'),
            },
            {
                id: 5,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: require('../../assets/icon/Image4.jpeg'),
            },
            {
                id: 6,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: require('../../assets/icon/Image3.jpeg'),
            },
        ]
    }

    renderListItems = (rowData, index) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ProductDetail', { productData: rowData })}
            >
                <ImageBackground
                    style={[styles.listStyle, { alignItems: (index % 2 == 0) ? 'flex-start' : 'flex-end' }]}
                    // source={{ uri: this.state.listData[0].poster }}
                    source={rowData.poster}
                    resizeMode={'contain'}
                >
                    <Text style={styles.headerStlye}>
                        {rowData.title}
                    </Text>
                    <Text style={styles.descriptionStyle} numberOfLines={4}>
                        {rowData.description}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.listData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => this.renderListItems(item, index)}
                    ListEmptyComponent={() => <Text>{'No data found.'}</Text>}
                    keyExtractor={(item) => item.id} />
            </View >
        )
    }
}

export default HomePage;

const styles = ({
    listStyle: {
        height: 150,
        width: width - 10,
        marginTop: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    headerStlye: {
        fontSize: 20,
        width: 200,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    descriptionStyle: {
        fontSize: 10,
        width: 200,
        paddingHorizontal: 10
    }
})