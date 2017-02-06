import React from 'react'
import {Link} from 'react-router'

export default class GuitarPreview extends React.Component {

	render() {
		return (
			<div className="guitar-preview">				
				<Link to={"/guitar/" + this.props.id}>
					<h3>{this.props.manufacturer} <small>{this.props.name}</small></h3>
					<img 
						className="img-responsive" 
						src={"img/" + this.props.image}/>
				</Link>				
			</div>
		);
	}
}