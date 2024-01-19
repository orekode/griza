
import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useProducts } from '../api/products/read'
import { Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
        marginTop: StatusBar.currentHeight,
        paddingLeft: 25,
        paddingRight: 25,
    },

    grid: {
        // flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        padding: 15,
        
    },

    item : {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#99999936",
        width:  width * 0.442,
        padding: 15,

    },
    image : {
        height: width * 0.40,
        width: "100%",
        objectFit: "contain"
    },
    text : {
        paddingTop: 10,
        flex: 1,
        // height: 60
    }
})

const Suppliers = () => {
    const { data } = useProducts();


    return (

        <ScrollView contentContainerStyle={styles.grid}>
            {data && data.map((item, index) => 
                <View key={index} style={styles.item}>
                    <Image style={styles.image} source={{uri: item.image}} />
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text}>${item.price}</Text>
                </View>
            )}
        </ScrollView>
    )
}



export default Suppliers