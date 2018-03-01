import React from 'react';
import Quote from './Quote';

class QuoteList extends React.Component {
	render() {
		return (
			<section className="wrapper quotes js-quotes-wrapper is-empty">
				<Quote />
    		</section>
		);
	}
}

export default QuoteList;