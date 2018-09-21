import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ButtonSignOut from './ButtonSignOut'
import { getSlug } from '../utils/helpers'
import config from '../config'
import Logo from '../assets/imgs/logo_tiny.png'

class Navigation extends React.Component {
	state = {
		visible: false,
		redirectTo: '',
	}

	static propTypes = {
		DIC: PropTypes.object.isRequired,
	}

	handleVisibility = () => {
		this.setState(prevState => ({ visible: !prevState.visible }))
	}

	handleNavigation = e => {
		const { name } = e.target

		console.log(name)

		setTimeout(() => {
			document.querySelector(`.${name}`).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		})

		this.setState({ visible: false })
	}

	handleSignOut = () => {
		localStorage.removeItem(config.api.API_TOKEN)
		this.props.checkAuth()
	}

	render() {
		const { DIC, auth } = this.props
		const { visible } = this.state
		const icon = visible ? 'close' : 'menu'
		const NAV = [
			{
				label: DIC.NAV_INFO,
				children: [DIC.NAV_BASES, DIC.NAV_TEXTOS, DIC.NAV_CRITERIOS, DIC.NAV_COLEGIOS],
			},
			{ label: DIC.NAV_INSCRIPCION, children: [] },
			{ label: DIC.NAV_GALERIA, children: [] },
		]

		const List = (
			<ul className={`app-nav-list ${icon}`}>
				<li className="app-nav-item btn-close">
					<Link onClick={this.handleNavigation} to="/" name={'app-landing'}>
						<img name={'app-landing'} src={Logo} alt="Leo, leo" />
					</Link>
					<button onClick={this.handleVisibility}>
						<span className="txt">CERRAR</span>
						<span className={`icon-close`} />
					</button>
				</li>
				<li className="app-nav-item logo">
					<Link to="/">
						<img
							onClick={this.handleNavigation}
							data-scroll={true}
							name="app-header"
							src={Logo}
							alt="Leo, leo"
						/>
					</Link>
				</li>
				{NAV.map((item, i) => {
					const label = getSlug(item.label)
					const children = item.children.length
					const section = `app-section-${i}`
					const iconDown = children ? 'item dropdown' : ''

					return (
						<li key={label} className="app-nav-item">
							<Link className={iconDown} to="/" onClick={this.handleNavigation} name={section}>
								{item.label.toUpperCase()}
							</Link>
							{!!children && (
								<ul className={`app-subnav-list`}>
									{item.children.map(item => {
										const link = '/' + getSlug(item)
										return (
											<li key={link} className="app-subnav-item">
												<Link onClick={this.handleVisibility} to={link}>
													{item.toUpperCase()}
												</Link>
											</li>
										)
									})}
								</ul>
							)}
						</li>
					)
				})}
				{auth && (
					<li className="app-nav-item btnAdminSignOut">
						<ButtonSignOut label={'Cerrar Sesión'} handleClick={this.handleSignOut} />
					</li>
				)}
				{!auth && (
					<li className="app-nav-mail">
						<a
							href="mailto:c.cid@hws.schule?subject=Concurso 'Leo, leo... ¿Qué lees?'"
							className="icon-envelope"
							aria-label="Correo de contacto"
						>
							<span className="hidden">Contacto</span>
						</a>
					</li>
				)}
				<li className="app-nav-item app-nav-item-responsive">
					<a
						href="mailto:c.cid@hws.schule?subject=Concurso 'Leo, leo... ¿Qué lees?'"
						aria-label="Correo de contacto"
					>
						{'Contacto'.toUpperCase()}
					</a>
				</li>
			</ul>
		)

		const ResponsiveMenu = (
			<div className={`app-respMenu ${icon}`}>
				<Link
					className="btn-close-item"
					onClick={this.handleNavigation}
					to="/"
					name={'app-landing'}
				>
					<img name={'app-landing'} src={Logo} alt="Leo, leo" />
				</Link>
				<button className="btn-menu" onClick={this.handleVisibility}>
					<span className="txt">MENU</span>
					<span className={`icon-menu`} />
				</button>
				{auth && <ButtonSignOut handleClick={this.handleSignOut} />}
			</div>
		)

		return (
			<nav className={`app-nav ${icon}`}>
				{!visible && ResponsiveMenu}
				{List}
				<div className={`app-menu-bg ${icon}`} />
			</nav>
		)
	}
}

export default Navigation
