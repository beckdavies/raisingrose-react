import React from 'react';

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.state = {
	    quote: '',
	    topic: ''
	  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
		<section className="wrapper form">
			<form onSubmit={this.handleSubmit}>
				<textarea placeholder="what did she say?" 
						  value={this.state.quote}
						  onChange={this.handleChange}></textarea>
				<input type="hidden" id="lat" name="lat" />
				<input type="hidden" id="long" name="long" />
				<input type="hidden" id="published" name="published" value="1" />
				<input type="submit" value="Submit" className="save"/>
			</form>
		</section>
    );
  }
}

export default QuoteForm;
