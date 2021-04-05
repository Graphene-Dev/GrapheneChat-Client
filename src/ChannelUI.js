import React from 'react';

export default class ChannelUI extends React.Component {
	constructor() {
		super()

		this.state = {
			msg: ""
		}

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({msg: event.target.value});
	}

	handleSubmit(event) {
		this.props.send(this.state.msg)
		this.setState({msg: ""})
		event.preventDefault();
	}

	shouldComponentUpdate() {
		return true;
	}

	render() {
		return (
			<div className="cur-channel">
				<div style={{flexGrow: 1}}></div>
				<div>
				  {this.props.messages.map((msg) => {
						return (
							<div className="msg-cont">
								{msg.author} {msg.msg}
							</div>
						)
					})}
				</div>
				<form className="new-msg" onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.msg} onChange={this.handleChange}/>
				</form>
			</div>
		)
	}
}
