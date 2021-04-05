import React from 'react'

import ChannelUI from './ChannelUI'
import ChannelList from './ChannelList'
import MemberList from './MemberList'
import ServerList from './ServerList'

import Server from './Server'

export default class App extends React.Component {
	constructor() {
		super()

		this.state = {
			a: true
		}

		this.servers = [
			new Server("test", "localhost:8080", () => {this.setState({a: !this.state.a})}, Math.round(Math.random()*100))
		]
	}

	render() {
		return (
			<div className="app">
				<ServerList servers={this.servers}/>
				<ChannelList />
				<ChannelUI messages={this.servers[0].channels[0].messages} send={(msg) => this.servers[0].send(msg)} a={this.state.a}/>
				<MemberList />
			</div>
		)
	}
}
