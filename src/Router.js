import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Empregados from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please Login" />    
                <Scene key="employeeList" component={Empregados} title="Empregados" initial/>            
            </Scene>            
        </Router>
    )
}

export default RouterComponent;