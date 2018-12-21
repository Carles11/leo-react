import React from 'react'

import Loader from './components/Loader'

class RoutesAsync extends React.Component {
	state = {
		loaded: false,
	}

	component = null

	async componentDidMount() {
		const { default: component } = await this.props.loadingPromise
		this.component = component
		this.setState({ loaded: true })
	}

	render() {
		if (this.state.loaded) {
			return <this.component {...this.props} />
		}

		return <Loader css={'h725'} />
	}
}

export default RoutesAsync
