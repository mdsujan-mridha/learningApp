import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import { colors } from '../utils/styles';


const HomeHeader = () => {
    const { userData, setUserData } = useContext(AuthContext);
    console.log(userData);
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 800 }}> Hello, </Text>
                <Text style={{ fontSize: 17, fontWeight: 900 }}>{userData?.name}</Text>
            </View>
            <Image source={{ uri: userData.photo }} style={styles.profileImage} />
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 100
    }
})