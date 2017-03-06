import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import store from './reducers'
import Main from './components/common/main'
import Home from './components/home'
import Search from './components/search'
import Movie from './components/movie'
import reduxComponent from './containers'

let appStore = createStore(
	store,
	applyMiddleware(thunk)
)

render(
	<Provider store={appStore}>
		<Router history={browserHistory}>
			<Route path='/' component={Main}>
				<IndexRoute component={Home}/>
				<Route path='movie/:id' component={Movie}/>
				<Route path='search' component={Search}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)
