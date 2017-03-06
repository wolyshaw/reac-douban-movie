import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Main from './components/common/main'
import Home from './components/home'
import Search from './components/search'
import Movie from './components/movie'

render(
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='movie/:id' component={Movie}/>
			<Route path='search' component={Search}/>
		</Route>
	</Router>,
	document.getElementById('app')
)
