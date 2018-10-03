import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
	  clicked: false,
    };
  }

 
  //needs textbox for searching/filtering results
  
  //display box for printing out more details about the selected building
  
  //imports and use everal React Component files to implement its functionality
  
  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
	this.setState({filterText: value})

  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
	this.setState({selectedBuilding: id})
	this.setState({clicked: true})
	
  }


  render() {
	
    return (


		<div className="bg">
		
        <div className="row">
		<h1> UF Directory App</h1>
        <Search filterText = {this.state.filterText} filterUpdate = {this.filterUpdate.bind(this)}/>
		</div>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
					filterText = {this.state.filterText}
					selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
				selectedBuilding = {this.state.selectedBuilding}
				data = {this.props.data}
				selectedUpdate = {this.selectedUpdate.bind(this)}
				clicked = {this.state.clicked}
			  />
            </div>
          </div>
          <Credit />
        </main>
      </div>

    );
  }
}

export default App;
