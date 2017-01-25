import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { Actions,Scene,Router } from 'react-native-router-flux';
import { Welcome,LogIn,SignUp } from './containers/'
 

export default class AppRouter extends Component {
    render() {
        return(
            <Router>
                <Scene key="root">
                    <Scene key="welcome" component={Welcome} hideNavBar/>
                    <Scene key="login" component={LogIn} />
                    <Scene key="signup" component={SignUp} />
                </Scene>
            </Router>
        );
    }
}