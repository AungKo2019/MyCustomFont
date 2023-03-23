import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>Home Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#FFF5E4'
    },
    titletext: {
        fontFamily: 'Nunito-Regular',
        fontSize: 18,
        // color: '#8BBCCC',
        justifyContent: "center",
        textAlign: "center",
    }
    
});