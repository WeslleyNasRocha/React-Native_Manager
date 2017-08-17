import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this
            .props
            .emailChanged(text);
    }

    onPasswordChange(text) {
        this
            .props
            .passwordChanged(text);
    }

    onButtonPress() {
        console.log(this.props);
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    }

    renderButton() {
        if (this.props.loading) {
            console.log("loading");
            return (
                <Spinner size="large" />
            )
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="exemplo@gmail.com"
                        onChangeText={this
                            .onEmailChange
                            .bind(this)}
                        value={this.props.email} />
                </CardSection>
                <CardSection>
                    <Input
                        label="Senha"
                        placeholder="senha"
                        secure
                        onChangeText={this
                            .onPasswordChange
                            .bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

mapStateToProps = ({ auth }) => {
    const {
        email,
        password,
        error,
        loading
    } = auth;

    return {
        email,
        password,
        error,
        loading
    };
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);