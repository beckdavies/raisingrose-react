import React from 'react';
import Header from './Header';
import QuoteForm from './QuoteForm';
import QuoteList from './QuoteList';
//import base from "../base";

class App extends React.Component {

	// componentDidMount() {
	// 	this.ref = base.syncState();
	// };

	// define state as an object
	state = {
		allQuotes: {}
	};

	// methods that update state always need to live in the
	// component as state does
	addQuote = newQuote => {
		// 1. take a copy of the existing state
		const tempQuotes = {...this.state.allQuotes};
		// 2. add our new quote to that variable
		tempQuotes[`quote${Date.now()}`] = newQuote;
		// 3. set the new quotes object to state
		this.setState({
			allQuotes: tempQuotes
		});
	};

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
