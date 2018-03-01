import React from 'react';

class Quote extends React.Component {

  render() {
    return (
		<div className="quote-container">
			<div className="quote">the quote</div>
			<div className="about">the topic</div>
			<div className="date">Thu Mar 01 2018 12:11:35 GMT+0000 (GMT)</div>
			<input type="submit" value="hide" className="quote-action-hide"/>
			<input type="hidden" id="quote-id" name="quote-id" value="" />
		</div>
    );
  }
}

export default Quote;
