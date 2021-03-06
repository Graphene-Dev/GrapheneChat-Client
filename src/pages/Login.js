import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
	constructor() {
		super()

		this.state = {
			email: "",
			pass: ""
		}
	}

	onSubmit(e) {
		console.log(this.state);
		e.preventDefault();
	}

	render() {
		return (
			<div className="standalone-cont">
				<form className="standalone-main" onSubmit={(e) => this.onSubmit(e)}>
					<input value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} type="text" style={{marginTop: "calc(10px + 20vh - 119px)"}} placeholder="Email"/>
					<input value={this.state.pass} onChange={(e) => {this.setState({pass: e.target.value})}} type="password" placeholder="Password"/>
					<div>
					<span style={{marginLeft: "5vw", marginTop: "19px", display: "inline-block"}}>Don't have an account? <Link to="/signup">Sign up</Link></span>
					<input type="submit" />
					</div>
				</form>
			</div>
		)
	}
}
