import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SongList from '../../routes/SongList';
import './Discover.css';

function Discover(props) {
	return (
	<Router className="discoveryLists">
		
		<Switch>
			<Route path='/songs'>
				<SongList />
			</Route>
		</Switch>
	</Router>
	)
}

export default Discover;