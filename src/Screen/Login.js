import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import loginImg from "../Assets/login.png";
import { colors } from '../utils/styles';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../utils/AuthContext';
import Services from '../utils/Services';



GoogleSignin.configure({
    webClientId: '775332713605-l3m95hd6jshfi4gtcq9ki88ctgegk6c2.apps.googleusercontent.com',

});

const Login = () => {
    const [user, setUser] = useState(null);
    const { userData, setUserData } = useContext(AuthContext);

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const userInfo = await GoogleSignin.signIn();
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            console.log("Login successful");
            setUserData(userInfo.user);
            setUser(userInfo.user);
            await Services.setUserAuth(userInfo.user);
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <View>
            <Image source={loginImg} />
            <View style={styles.container}>
                <Text style={styles.welcomeTxt}> Welcome to Science Pathshala-সাইন্স পাঠশালা </Text>
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 40, color: colors.color1 }}> Login/signup </Text>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={styles.loginBtn} onPress={onGoogleButtonPress}>
                        <Icon name="logo-google" size={15} color={colors.color3} style={{ marginTop: 10 }} />
                        <Text style={{ color: colors.color3, fontSize: 17 }}>  Signup/Login </Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    welcomeTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.color1,
        paddingTop: 20,
        textAlign: 'center',
    },
    container: {
        paddingTop: 40,
        backgroundColor: colors.color3,
        height: '100%',
        marginTop: -30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    loginBtn: {
        backgroundColor: colors.color1,
        width: '80%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    }

})