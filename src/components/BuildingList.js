import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;
		
		const buildingList = data
			.filter(directory => {
				return (directory.code.toLowerCase().indexOf(filterText) && directory.name.toLowerCase().indexOf(filterText)) >= 0
			})
		
			.map(directory => {
				return (
					<tr key={directory.id} onClick = {() => selectedUpdate(directory.id - 1)}>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
						
					</tr>
				);
		});

		return (
			<div>
				{buildingList}
			</div>
		)	
			
	}
}
export default BuilingList;
