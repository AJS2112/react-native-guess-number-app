import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import DefaultStyles from "../constants/DefaultStyles";
import CustomColors from "../constants/CustomColors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.titleText}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={require('../assets/success.png')}
                    // source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg' }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <Text style={DefaultStyles.bodyText}>You phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text> </Text>

            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: CustomColors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 40,
        marginVertical: 15
    }
});

export default GameOverScreen;