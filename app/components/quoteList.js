import React from 'react';
import Quote from './Quote';

class QuoteList extends React.Component {
	render() {
		return (
			<section className="quotes js-quotes-wrapper is-empty">
				{Object.keys(this.state.allQuotes).map(key => <p>{key}</p>)}<Quote />
    		</section>
		);
	}
}

export default QuoteList;