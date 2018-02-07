var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


// 1. create the component
class App extends React.Component {
	render() {
		return (
			<div>
				Hello world !!
			</div>
		)
	}
}

// 2. then render the component to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);