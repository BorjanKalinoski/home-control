import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import {Provider} from "react-redux";
import {store} from "./src/store/configure-store";
import MainNavigator from "./src/navigation/MainNavigator";

const App = () => {
    return (
        <Provider store={store}>
            <PaperProvider>
                <MainNavigator/>
            </PaperProvider>
        </Provider>
    );
};

export default App;

