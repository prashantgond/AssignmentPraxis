import React, { Component } from 'react';
import { View, Text, Image, FlatList, ImageBackground, Dimensions, StyleSheet, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');


class ProductDetails extends Component {

    state = {
        listData: [
            {
                id: 0,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
            },
            {
                id: 1,
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
                poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            },
        ]
    }

    renderSubView = (item, quantity) => {
        return (
            <View style={styles.subViewStyle}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.subHeaderStyle}>
                        {item}
                    </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={[styles.subHeaderStyle, { alignItems: 'flex-end' }]}>
                        {quantity}
                    </Text>
                </View>
            </View>
        )
    }


    render() {
        const { productData } = this.props.route.params;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Image
                        style={styles.iconStyle}
                        resizeMode={'contain'}
                        source={productData.poster}
                    />

                    <Text style={styles.headerStlye}>
                        {productData.title}
                    </Text>
                    <Text style={styles.descriptionStyle}>
                        {productData.description}
                    </Text>

                    <Text style={[styles.headerStlye, { fontStyle: 'normal' }]}>
                        {'Nutrition fact'}
                    </Text>


                    {this.renderSubView('Serving size', '100 g')}
                    <View style={styles.dashedLineStyle} />

                    {this.renderSubView('Calories', '100 g')}
                    <View style={styles.dashedLineStyle} />

                    {this.renderSubView('Total fat 0.3g', '0 %')}
                    {this.renderSubView('Sodium 1mg', '0 %')}
                    {this.renderSubView('Total Carbohydrate 23g', '0 %')}
                    {this.renderSubView('Protein 1g', '0 %')}
                    <View style={styles.dashedLineStyle} />
                    {this.renderSubView('Vitamin D0.00cmg', '0 %')}
                    {this.renderSubView('Calcium 5.00mg', '0 %')}
                    {this.renderSubView('Iron 0.26mg', '0 %')}

                </ScrollView>
            </View >
        )
    }
}


const styles = ({
    iconStyle: {
        height: 150,
        width: width,
    },
    headerStlye: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    descriptionStyle: {
        fontSize: 10,
        paddingHorizontal: 10
    },
    subViewStyle: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    subHeaderStyle: {
        fontSize: 12,
        fontWeight: '500',
    },
    dashedLineStyle: {
        height: 5,
        marginHorizontal: 10,
        backgroundColor: '#000'
    }
})

export default ProductDetails;
