import React, {Component} from 'react'
import {render} from 'react-dom'
import {doubanApi} from 'util/util'
import styles from 'static/movie.css'

const MovieContent = props => {
	let {title, summary, countries, genres, rating, aka, images} = props.movie
	return (
		<div className={styles.content}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.imgWrap}>
				<div className={styles.img}  style={{backgroundImage: 'url('+images.large+')'}}></div>
				<p>{aka.join('/')}</p>
				<span className={styles.countries}>{countries.join(',')}</span>
				<span className={styles.genres}>{genres.join(',')}</span>
				<span className={styles.average}>{rating.average}</span>
			</div>
			<p className={styles.summary}>{summary}</p>
		</div>
	)
}

class Movie extends Component {
	constructor(props) {
		super(props)
		this.state = {
			movie: null
		}
	}

	componentWillMount() {
		doubanApi('/movie/subject/' + this.props.params.id)
			.then(res => res.json())
			.then(r => this.setState({
				movie: r
			}))
	}

	render() {
		return (
			<div className={styles.movie}>
				{
					this.state.movie ? <MovieContent movie={this.state.movie}/> : ''
				}
			</div>
		)
	}
}

export default Movie
