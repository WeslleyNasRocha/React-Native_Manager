import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyD4yV72mqjIxDjGUXiAOeqo6OS-_LMAs_c",
            authDomain: "employes-cfb56.firebaseapp.com",
            databaseURL: "https://employes-cfb56.firebaseio.com",
            projectId: "employes-cfb56",
            storageBucket: "employes-cfb56.appspot.com",
            messagingSenderId: "581962282313"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
