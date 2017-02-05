import React from 'react'

export default class App extends React.Component {
	render() {
		return (
			<div className="container app-container">
				{this.props.children || "this is the default goddamned bullshit"}
			</div>		  
		);
	}
}