import React from 'react'
import {Link} from 'react-router'
import styles from 'static/movie-item.css'

const MovieItem = props => {
	let {item} = props,
		{title, images, genres, rating, original_title, id} = item
	return (
		<Link className={styles.item} to={'/movie/' + id}>
			<div className={styles.img} style={{backgroundImage: 'url('+images.large+')'}}></div>
			<header className={styles.title}>{title}</header>
			<span className={styles.genres}>{genres.join(',')}</span>
			<span className={styles.average}>{'评分:' + rating.average}</span>
		</Link>
	)
}

export default MovieItem
