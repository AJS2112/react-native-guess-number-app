import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import DefaultStyles from "../constants/DefaultStyles";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.titleText}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    //source={require('../assets/success.png')}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg' }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text style={DefaultStyles.bodyText}>Number of Rounds: {props.roundsNumber}</Text>
            <Text style={DefaultStyles.bodyText}>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
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
    }
});

export default GameOverScreen;