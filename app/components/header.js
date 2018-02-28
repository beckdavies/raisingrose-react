import React from 'react';
import Menu from './Menu';

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
		);
	}
}

export default Header;