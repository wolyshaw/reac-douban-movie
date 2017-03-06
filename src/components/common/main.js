import React from 'react'
import Header from './header'
import Footer from './footer'
import styles from 'static/main.css'

const Main = props => {
	return (
		<div className={styles.main}>
			<Header/>
			<div className={styles.center}>
				{props.children}
			</div>
			<Footer/>
		</div>
	)
}

export default Main
