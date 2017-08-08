import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/main.scss';
import Bars from './components/bars.js'
import Controls from './components/controls.js'

class ProgressBars extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedId: 0
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		// get data
		fetch('http://frontend-exercise.apps.staging.digital.gov.au/bars')
			.then((resp) => resp.json())
			.then((data) => {
				if (data.buttons && data.bars) {
					this.setState({ 
						buttons: data.buttons,
						bars: data.bars
					})
				}
			})
	}

	// select bar
	handleChange(event) {
    	this.setState({
			selectedId: event.target.value
		});
	}
	
	// update bar
	handleClick(event) {

		// set new 'bars' object, perform maths operation on the selected bar and then update state
		let newBars = this.state.bars;
		let selectedBar = newBars[this.state.selectedId];
		const result = selectedBar + parseInt(event.target.innerHTML);
		if (parseInt(result) > 0) {
			newBars[this.state.selectedId] = result;
		}
		else {
			newBars[this.state.selectedId] = 0;
		}
		this.setState({
			bars: newBars
		});
  	}

	render() {
		// if no data
		if (!this.state.buttons && !this.state.bars) {
			return null;
		}

		return (
			<div>
				<h1>Progress bars</h1>
				<Bars bars={this.state.bars} selectedBar={this.state.selectedId}/>
				<Controls buttons={this.state.buttons} bars={this.state.bars} handleChange={this.handleChange} handleClick={this.handleClick}/>
			</div>
		);
	}
};

export default ProgressBars;

ReactDOM.render(<ProgressBars/>, document.getElementById('container'));


