import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 55 }}>
            <Scene key="auth">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                    initial
                />
            </Scene>
            {/*The `direction="vertical"` makes the animation come from below  */}
            <Scene key="main" direction="vertical" >
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    panHandlers={null}
                />
            </Scene>
        </Router>
    )
}

export default RouterComponent;
