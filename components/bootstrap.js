/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Talentlodge from './talentlodge.js';
import Results from './results.js';
import UserProfile from './user_profile.js';

const routes = [
  {index: 0, users:[]},
  {index: 1, users:[]},
  {index: 2}
];

let usersResult = [];

export default class Bootstrap extends Component
{

	navigatorRenderScene(route, navigator){
		let navObject = {'routes': routes, 'index': route.index, 'navigator': navigator}
		switch(route.index) {
		    case 0:
		        return (<Talentlodge navObject={navObject} />);
		        break;
		    case 1:
		        return (<Results navigator={navigator} users={route.users} />);
		        break;
        case 2:
		        return (<UserProfile navigator={navigator} user={route.user} />);
		        break;
		    default:
		        return (<Talentlodge />);
		}
	}



	render (){
		return (
			<Navigator
				initialRoute={routes[0]}
				initialRouteStack={routes}
				renderScene={ this.navigatorRenderScene }
				configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
			/>
		);
	}
}
