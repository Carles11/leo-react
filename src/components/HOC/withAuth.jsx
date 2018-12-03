import React from 'react'

import config from '../../config'
import Loader from '../Loader'

const withAuth = Component =>
	class extends React.Component {
		state = {
			auth: false,
			checked: false,
		}

		componentDidMount() {
			this.checkAuth()
		}

		componentWillUnmount() {
			this.setState({ auth: false, checked: false })
		}

		checkAuth = () => {
			const auth = localStorage.getItem(config.api.API_TOKEN) ? true : false
			this.setState({ auth, checked: true })
		}

		render() {
			const { checked } = this.state

			return (
				<React.Fragment>
					{!checked && <Loader />}
					{checked && <Component checkAuth={this.checkAuth} {...this.props} {...this.state} />}
				</React.Fragment>
			)
		}
	}

export default withAuth
