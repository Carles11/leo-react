import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

class PrintComponent extends React.Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		handleRemove: PropTypes.func.isRequired,
		handleShow: PropTypes.func.isRequired,
	}

	render() {
		const { data, handleRemove, handleShow } = this.props

		return (
			<ul className="app-list">
				{!!data.length &&
					data.map(item => (
						<Item key={item._id} item={item} handleRemove={handleRemove} handleShow={handleShow} />
					))}
				{data.length === 0 && <p className="txt">Todavía no hay ningún item en el listado.</p>}
			</ul>
		)
	}
}

export default PrintComponent
