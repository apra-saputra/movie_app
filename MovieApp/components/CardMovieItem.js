import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CardMovieItem = () => {
    return (
        <View style={styles.container}>
            <Text>Ini card item movie</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 30,
    }
})

export default CardMovieItem;
