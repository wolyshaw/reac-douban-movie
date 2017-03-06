import React from 'react'
import {Link} from 'react-router'
import styles from 'static/header.css'

const Header = props => {
	return (
		<div className={styles.header}>
			<Link to='/'>豆瓣电影Api测试</Link>
			<Link to='/search' className={styles.search}>搜索</Link>
		</div>
	)
}

export default Header
