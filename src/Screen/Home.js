
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'
import Services from '../utils/Services';
import { Button } from 'react-native-paper';
import HomeHeader from '../Components/HomeHeader';
import SearchBar from '../Components/SearchBar';
import { colors } from '../utils/styles';


const Home = () => {
    const { userData, setUserData } = useContext(AuthContext);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <HomeHeader />
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingBottom: 15,
    }
})