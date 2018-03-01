import React from 'react';
import Header from './Header';
import QuoteForm from './QuoteForm';
import QuoteList from './QuoteList';
import base from "../base";

class App extends React.Component {

	componentDidMount() {
		this.ref = base.syncState();
	};

	render() {
		return (
			<div>
				<Header />
				<QuoteForm />
				<QuoteList />
			</div>
		);
	}
}

export default App;
