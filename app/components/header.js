var React = require('react');
var Menu = require('./Menu');

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>
					<a href="#">
						<span>raising</span>
						<span>rose</span>
					</a>
				</h1>
				<Menu />
			</header>
		)
	}
}

module.exports = Header;