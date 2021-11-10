import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomColors from "../constants/CustomColors";

const MainButton = props => {
    return <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: CustomColors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;