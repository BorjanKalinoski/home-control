import React, { useState} from "react";
import {Button} from "react-native-paper";
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import * as authActions from '../../store/actions/auth';
import { Formik} from 'formik';
import * as yup from 'yup';
import {TextField} from "@ubaids/react-native-material-textfield";
import ErrorMessage from "../../components/UI/ErrorMessage";
import {CLEAR_ERRORS} from "../../constants/actions";
const initialValues = {
    email: '',
    password: ''
};
const validationSchema = yup.object().shape({
    email: yup.string().email('Email is not valid').required('This field is required'),
    password: yup.string().required('This field is required').min(6, 'Password must be at least 6 characters')
});

const AuthScreen = (props: any) => {
    const [isLogin, setIsLogin] = useState(true);
    const {error, isLoading} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    return <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            const {email, password} = values;
            // actions.resetForm();
            dispatch(authActions.tryAuthenticateWithEmailAndPassword(email, password, isLogin));
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
                    {error && <ErrorMessage>{error.message}</ErrorMessage>}
                    <Button
                        mode='contained'
                        onPress={handleSubmit}
                        disabled={!isValid}
                        loading={isLoading}
                        style={styles.buttonContainer}
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </Button>
                    <Button
                        onPress={() => {
                            setIsLogin((prevState => !prevState));
                            dispatch({type: CLEAR_ERRORS})
                        }}
                        disabled={isLoading}
                        style={styles.buttonContainer}
                    >
                        Switch to {isLogin ? 'Sign Up' : 'Login'}
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
    buttonContainer:{
        marginVertical:8
    }
});

export default AuthScreen;
