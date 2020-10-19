
import { Component } from 'react';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './Components/Router';
import Login from './Components/Login';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent('helloban', () => Router);