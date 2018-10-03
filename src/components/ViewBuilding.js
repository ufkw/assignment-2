import React from 'react';

class ViewBuilding extends React.Component {
	

	
	render() {
		
		const { data, clicked } = this.props;
		const name = data[this.props.selectedBuilding].name
		const code = data[this.props.selectedBuilding].code
		const address = data[this.props.selectedBuilding].address
		const coordinates = data[this.props.selectedBuilding].coordinatess
	
		if(this.props.clicked)
		{
			const message = "There are no coordinates for this building."
			if(typeof coordinates !== "undefined")
			{
			return (
			<div className = "selectedBuilding">
				<p>
					{code}<br></br>
					{name} <br></br>
					{address} <br></br>
					Latitude: {' '}{coordinates.latitude} <br></br>
					Longitude: {' '}{coordinates.longitude} <br></br>
				</p>	
			</div>	
		)
			}
			else
			{
				return(
				<div className = "selectedBuilding">
				<p>
					{code}<br></br>
					{name} <br></br>
					{address} <br></br>
					{message}<br></br>
					
					
				</p>	
				
				
			</div>	
		);
	
			}
		}
		else
		{
			return(<div className = "selectedBuilding">
			<i>Click on a name to view more information</i></div>) 
		}
		
	}
}
export default ViewBuilding;
