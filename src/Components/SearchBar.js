import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/styles'

const SearchBar = () => {

    return (
        <View style={styles.container}>
            <TextInput placeholder='Search' style={styles.inputStyle} />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: colors.color4,
        borderWidth: 1,
        width: '90%',
    }
});
