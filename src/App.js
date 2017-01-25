import React, { Component } from 'react';
import { Text,View } from 'react-native';
import AppRouter from './routes';

export default class App extends Component {
    render() {
        return(
            <AppRouter />
        );
    }
}