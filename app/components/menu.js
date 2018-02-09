var React = require('react');

class Menu extends React.Component {
	render() {
		return (
			<ul className="menu">
	            <li>
	                <a className="GPS-status js-GPS-status"></a>
	            </li>
	            <li>
	                <a className="show-quotes js-show-quotes">
	                    <svg className="svg-icon list-quotes">
	                        <use xlinkHref="#two-bubbles" />
	                    </svg>
	                </a>
	            </li>
	            <li>
	                <a className="add-quote js-add-quote is-clicked">
	                    <svg className="svg-icon add">
	                        <use xlinkHref="#add" />
	                    </svg>
	                </a>
	            </li>
	            <li>
	                <a className="save js-save">
	                    <svg className="svg-icon save">
	                        <use xlinkHref="#save" />
	                    </svg>
	                </a>
	            </li>
	        </ul>
		)
	}
}

module.exports = Menu;