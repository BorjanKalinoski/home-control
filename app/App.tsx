import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from "react-native-elements";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import MainNavigator from "./src/navigation/MainNavigator";

const App = () => (
    <Provider store={store}>
        <ThemeProvider>
            <MainNavigator/>
        </ThemeProvider>
    </Provider>
);

export default App;

