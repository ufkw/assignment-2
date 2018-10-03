import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value //update
		this.props.filterUpdate(val) //send to parent
		console.log(val)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		console.log('filterText value', this.props.filterText)
		
		return (
			<header>
				<form>
					<input type="text" ref={(value)=> this.myValue = value} placeholder="Type to Filter" onChange = {this.filterUpdate.bind(this)}/>
				</form>
			</header>	
		);
	}
}
export default Search;
