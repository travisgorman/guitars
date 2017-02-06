import React from 'react'
import GuitarPreview from '../partials/GuitarPreview'
import guitars from '../../data/guitars'

export default class Home extends React.Component {

	render() {
		return (  
		  <div className="row">
		  	{guitars.map(g => {
		  		return (  
		  			<div key={g.id} className="col-md-3">
              <GuitarPreview {...g} />
            </div>
		  		);
		  	})}
		  </div>
		)		 
	}
} 