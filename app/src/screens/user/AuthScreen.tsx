import React, { useState} from "react";
import {Button, Text, Input, Icon} from "react-native-elements";
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from '../../redux/actions';
import { Formik} from 'formik';
import * as yup from 'yup';
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
    // @ts-ignore
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

    const submitButtonText = isLoginScreen ? 'Login' : 'Sign Up';
    const switchToHelperText = isLoginScreen ? 'Don\'t have an account?' : 'Already have an account?';
    const switchToText = isLoginScreen ? 'Sign Up' : 'Login';

    return <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            const {email, password} = values;
            dispatch(authActions.authenticateWithEmailAndPassword(email, password, isLoginScreen));
        }}
        validationSchema={validationSchema}
    >
        {({values, handleBlur, touched, isValid, handleChange, handleSubmit, errors, resetForm}) => (
            <TouchableWithoutFeedback touchSoundDisabled onPress={Keyboard.dismiss}>
                <View style={styles.screen}>
                    <View style={styles.form}>
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
                            title={submitButtonText}
                            disabled={!isValid}
                            loading={isSubmitting}
                            buttonStyle={styles.button}
                            onPress={() => handleSubmit()}
                        />
                    </View>
                    <View style={styles.helperContainer}>
                        <Text style={styles.switchToHelperText}>
                            {switchToHelperText}
                        </Text>
                        <TouchableWithoutFeedback disabled={isSubmitting} onPress={() => {
                            setIsLoginScreen((prevState => !prevState));
                            dispatch(authActions.clearAuthErrors());
                        }}>
                            <Text style={styles.switchToText}>{switchToText}</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )}
    </Formik>;
};

const styles = StyleSheet.create({
    screen: {
        padding: 28,
        flex: 1
    },
    form: {
        height: '60%',
        justifyContent: 'flex-end'
    },
    button: {
        marginTop: 28,
    },
    helperContainer: {
        marginTop: 35,
    },
    switchToText: {
        color: '#2196f3',
        fontSize: 16,
    },
    switchToHelperText: {
        color: '#adadad',
        marginVertical: 10,
        fontSize: 16
    }
});

export default AuthScreen;
