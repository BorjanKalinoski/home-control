import React, { useState} from "react";
import {Button} from "react-native-paper";
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from '../../store/actions';
import { Formik} from 'formik';
import * as yup from 'yup';
// @ts-ignore
import {TextField} from "@ubaids/react-native-material-textfield";

const initialValues = {
    email: '',
    password: ''
};

const validationSchema = yup.object().shape({
    email: yup.string().email('Email is not valid').required('This field is required'),
    password: yup.string().required('This field is required').min(6, 'Password must be at least 6 characters')
});

const AuthScreen = (props: any) => {
    const [isLoginScreen, setIsLoginScreen] = useState(true);
    // @ts-ignore state:RootState
    const {error, isLoading} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    if (error) {
        Alert.alert(
            'Oops..',
            error.message,
            [{
                text: 'Okay'
            }]
        );
    }

    return <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            const {email, password} = values;
            dispatch(authActions.authenticateWithEmailAndPassword(email, password, isLoginScreen));
        }}
        validationSchema={validationSchema}
    >
        {({isSubmitting, values, handleBlur, touched, isValid, handleChange, handleSubmit, errors}) => (
            <TouchableWithoutFeedback touchSoundDisabled onPress={Keyboard.dismiss}>
                <View style={styles.screen}>
                    <TextField
                        label='Email'
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={touched.email && errors.email}
                    />
                    <TextField
                        label="Password"
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={touched.password && errors.password}
                        secureTextEntry
                    />
                    <Button
                        mode='contained'
                        onPress={handleSubmit}
                        disabled={!isValid}
                        loading={isLoading}
                        style={styles.button}
                    >
                        {isLoginScreen ? 'Login' : 'Sign Up'}
                    </Button>
                    <Button
                        onPress={() => {
                            setIsLoginScreen((prevState => !prevState));
                            dispatch(authActions.clearAuthErrors());
                        }}
                        disabled={isLoading}
                        style={styles.button}
                    >
                        Switch to {isLoginScreen ? 'Sign Up' : 'Login'}
                    </Button>
                </View>
            </TouchableWithoutFeedback>
        )}
    </Formik>;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    button: {
        marginVertical: 8
    }
});

export default AuthScreen;
