import React from 'react'
import {Link} from 'react-router'
import MovieItem from './movie-item'
import styles from 'static/view-list.css'

const ViewList = props => {
	let {title, subjects} = props
	return (
		<div className={styles.ViewList}>
			<header className={styles.header}>
				<span className={styles.title}>{title}</span>
				<Link className={styles.more} to='/'>更多</Link>
			</header>
			<div className={styles.contentWrap}>
				<div className={styles.content}>
					{
						subjects ? subjects.map(item => <MovieItem key={item.id} item={item} />) : ''
					}
				</div>
			</div>
		</div>
	)
}

export default ViewList
