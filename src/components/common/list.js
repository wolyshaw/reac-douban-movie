import React from 'react'
import {Link} from 'react-router'
import styles from 'static/list.css'

const Item = props => {
	let {title, images, rating, genres, id} = props.item
	return (
		<Link className={styles.item} to={'/movie/' + id}>
			<div className={styles.img} style={{backgroundImage: 'url('+images.large+')'}}></div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<span className={styles.genres}>{genres.join(',')}</span>
				<span className={styles.rating}>{'评分:' + rating.average}</span>
			</div>
		</Link>
	)
}

const List = props => {
	let {title, subjects} = props.list
	return (
		<div className={styles.list}>
			<header className={styles.search}>{title}</header>
			{
				subjects.map(item => <Item key={item.id} item={item}/>)
			}
		</div>
	)
}

export default List
