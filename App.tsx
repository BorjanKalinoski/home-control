import React from 'react';
import {StyleSheet,} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import AuthScreen from "./screens/user/AuthScreen";
import {Provider,} from "react-redux";
import {store} from "./store/configure-store";

export default function App() {

    return (
        <Provider store={store}>
            <PaperProvider>
                <AuthScreen/>
            </PaperProvider>
        </Provider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
