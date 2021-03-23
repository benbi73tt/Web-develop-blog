import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<div>
        <Header/>
			</div>
		);
	}
}

export default App;
