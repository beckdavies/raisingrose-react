import React from 'react';
import Header from './Header';
import QuoteForm from './QuoteForm';
import QuoteList from './QuoteList';

class App extends React.Component {
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
