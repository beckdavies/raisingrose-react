import React from 'react';
import Header from './Header';
import QuoteForm from './QuoteForm';
import QuoteList from './QuoteList';
//import base from "../base";

class App extends React.Component {

	// componentDidMount() {
	// 	this.ref = base.syncState();
	// };

	// state = {
	// 	allQuotes: {}
	// };

	// addQuote = quote => {
	// 	console.log("adding a quote");
	// };

	render() {
		return (
			<div>
				<Header />
				<QuoteForm addQuote={this.addQuote} />
				<QuoteList />
			</div>
		);
	}
}

export default App;
