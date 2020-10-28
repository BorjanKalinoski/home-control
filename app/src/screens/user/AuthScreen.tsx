import React, { useState} from "react";
import {Button} from "react-native-paper";
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from '../../redux/actions';
import { Formik} from 'formik';
import * as yup from 'yup';
// @ts-ignore
import {TextField} from "@ubaids/react-native-material-textfield";
import {globalStyles} from "../../styles";

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
    const {error, isSubmitting} = useSelector(state => state.auth);

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
    const authButtonText = isLoginScreen ? 'Login' : 'Sign Up';
    const switchToText = `Switch to ${isLoginScreen ? 'Sign Up' : 'Login'}`;

    return <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            const {email, password} = values;
            dispatch(authActions.authenticateWithEmailAndPassword(email, password, isLoginScreen));
        }}
        validationSchema={validationSchema}
    >
        {({values, handleBlur, touched, isValid, handleChange, handleSubmit, errors}) => (
            <TouchableWithoutFeedback touchSoundDisabled onPress={Keyboard.dismiss}>
                <View style={globalStyles.container}>
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
                        loading={isSubmitting}
                        style={styles.button}
                    >
                        {authButtonText}
                    </Button>
                    <Button
                        onPress={() => {
                            setIsLoginScreen((prevState => !prevState));
                            dispatch(authActions.clearAuthErrors());
                        }}
                        disabled={isSubmitting}
                        style={styles.button}
                    >
                        {switchToText}
                    </Button>
                </View>
            </TouchableWithoutFeedback>
        )}
    </Formik>;
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 8
    }
});

export default AuthScreen;
