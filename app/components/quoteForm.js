import React from 'react';

class QuoteForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		    quote: '',
		    topic: '',
		    date: new Date(),
		    lat: '',
		    long: '',
		    publish: ''
		 };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}


	handleSubmit(event) {
		// stop the form from submitting
		event.preventDefault();
		console.log('Quote: ' + this.state.quote + 'Topic: ' + this.state.topic + this.state.date);
		// get the text from the input
	}

	render() {
		return (
			<section className="wrapper form">
				<form onSubmit={this.handleSubmit}>
					<textarea placeholder="quote" 
							  value={this.state.quote}
							  onChange={this.handleChange}
							  name="quote"
							  required></textarea>
					<textarea placeholder="topic" 
							  value={this.state.topic}
							  onChange={this.handleChange}
							  name="topic"
							  required></textarea>
					<input type="hidden" id="lat" name="lat" />
					<input type="hidden" id="long" name="long" />
					<input type="hidden" id="published" name="published" value="1" />
					<button type="submit" value="Submit" className="save">Add</button>
				</form>
			</section>
		);
	}
}

export default QuoteForm;
