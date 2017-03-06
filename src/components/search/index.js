import React, {Component} from 'react'
import {render} from 'react-dom'
import List from '../common/list'
import {doubanApi} from 'util/util'
import styles from 'static/search.css'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: null
		}
	}

	search(e) {
		e.preventDefault()
		doubanApi('/movie/search', {q: this.refs.inp.value})
			.then(res => res.json())
			.then(r => this.setState({
				list: r
			}))
	}

	render() {
		return (
			<div>
				<form className={styles.form} onSubmit={this.search.bind(this)}>
					<input ref="inp" className={styles.input} type="text" placeholder="输入关键词搜索" />
				</form>
				{
					this.state.list && this.state.list.subjects ? <List list={this.state.list}/> : ''
				}
			</div>
		)
	}
}

export default Search
