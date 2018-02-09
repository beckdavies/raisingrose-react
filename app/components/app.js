var React = require('react');
var Header = require('./Header');
var QuoteForm = require('./QuoteForm');
var QuoteList = require('./QuoteList');

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<QuoteForm />
				<QuoteList />
			</div>
		)
	}
}

module.exports = App;