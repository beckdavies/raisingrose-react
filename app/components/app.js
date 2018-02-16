var React = require('react');
var Header = require('./Header');
var QuoteForm = require('./QuoteForm');
var QuoteList = require('./QuoteList');

class App extends React.Component {
	render() {
		return (
			<div>
				<Header tagline="thsi" age="{true}" fish="5000" />
				<QuoteForm />
				<QuoteList />
			</div>
		)
	}
}

module.exports = App;