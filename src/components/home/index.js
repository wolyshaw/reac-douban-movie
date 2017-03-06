import React, {Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import ViewList from '../common/view-list'
import {doubanApi} from 'util/util'
import styles from 'static/home.css'

export default class Home extends Component {
	constructor(props) {
		super(props)
		// 此处应使用redux替代state
		this.state = {
			theaters: {},
			coming_soon: {},
			top: {}
		}
	}

	componentWillMount() {
		if (!this.state.theaters.title) {
			doubanApi('/movie/in_theaters')
				.then(res => res.json())
				.then(r => this.setState({
					theaters: r
				}))
		}
		if (!this.state.coming_soon.title) {
			doubanApi('/movie/coming_soon')
				.then(res => res.json())
				.then(r => this.setState({
					coming_soon: r
				}))
		}
		if (!this.state.top.title) {
			doubanApi('/movie/top250')
				.then(res => res.json())
				.then(r => this.setState({
					top: r
				}))
		}
	}

	render() {
		let theaters = this.state.theaters,
			coming_soon = this.state.coming_soon,
			top = this.state.top

		return (
			<div className={styles.home}>
				<ViewList title={theaters.title || '正在上映'} subjects={theaters.subjects} />
				<ViewList title={coming_soon.title || '即将上映'} subjects={coming_soon.subjects} />
				<ViewList title={top.title || 'top250'} subjects={top.subjects} />
			</div>
		)
	}
}
