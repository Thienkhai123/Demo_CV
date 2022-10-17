import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = (props) => {
	const {
		Home = 'Home',
		About = 'About',
		Services = 'Services',
		Resume = 'Resume',
		Work = 'Work',
		Contact = 'Contact',
	} = props

	const { t, i18n } = useTranslation('translation', { keyPrefix: 'header' })

	const switchLanguage = (lang) => {
		if (lang === 'vi') {
			i18n.changeLanguage(lang)
			localStorage.setItem('language', 'vi')
		} else {
			i18n.changeLanguage(lang)
			localStorage.setItem('language', 'en')
		}
	}

	return (
		<div>
			<header id='header-wrap'>
				<nav className='navbar navbar-expand-lg fixed-top scrolling-navbar indigo'>
					<div className='container'>
						<div className='navbar-header'>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#main-navbar'
								aria-controls='main-navbar'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='navbar-toggler-icon'></span>
								<span className='icon-menu'></span>
								<span className='icon-menu'></span>
								<span className='icon-menu'></span>
							</button>
							<a href='/' className='navbar-brand'>
								<img src='assets/img/logo.png' alt='' />
							</a>
						</div>
						<div
							className='collapse navbar-collapse'
							id='main-navbar'>
							<ul className='onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix'>
								<li className='nav-item active'>
									<a className='nav-link' href='#hero-area'>
										{t('Home')}
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#about'>
										{t('About')}
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#services'>
										{t('Services')}
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#resume'>
										{t('Resume')}
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#portfolios'>
										{t('Work')}
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#contact'>
										{t('Contact')}
									</a>
								</li>
							</ul>

							<select
								value={i18n.language}
								className=''
								onChange={(e) =>
									switchLanguage(e.target.value)
								}>
								<option value='vi'>🇻🇳</option>
								<option value='en'>🇬🇧</option>
							</select>
						</div>
					</div>

					<ul className='onepage-nev mobile-menu'>
						<li>
							<a href='#home'>{t('Home')}</a>
						</li>
						<li>
							<a href='#about'>{t('About')}</a>
						</li>
						<li>
							<a href='#services'>{t('Services')}</a>
						</li>
						<li>
							<a href='#resume'>{t('Resume')}</a>
						</li>
						<li>
							<a href='#portfolio'>{t('Work')}</a>
						</li>
						<li>
							<a href='#contact'>{t('Contact')}</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Header
