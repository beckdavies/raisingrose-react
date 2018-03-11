import React from 'react';

class Quote extends React.Component {

  render() {
    return (
		<div className="quote-container">
			<div className="quoteContent">{this.props.details.content}</div>
			<div className="about topic">{this.props.details.topic}</div>
			<div className="date">{this.props.details.date}</div>
			<input type="submit" value="hide" className="quote-action-hide"/>
			<input type="submit" value="edit" className="quote-action-hide"/>
			<input type="hidden" id="quote-id" name="quote-id" value="" />
		</div>
    );
  }
}

export default Quote;
