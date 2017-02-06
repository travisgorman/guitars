import React from 'react'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import App from '../pages/App'
import Home from '../pages/Home'
import Guitar from '../pages/Guitar'

	console.log( Home )
	console.log( Guitar )
	
export default class AppRoutes extends React.Component {


	render() {
		return (
			<Router history={browserHistory} >
				<Route path="/" component={App} >
					<IndexRoute component={Home} />
					<Route path="/guitar/:guitarId" component={Guitar} />
				</Route>
			</Router>		  
		);
	}	
}