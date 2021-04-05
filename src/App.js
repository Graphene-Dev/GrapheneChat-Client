import React from 'react'

import Channel from './Channel'
import ChannelList from './ChannelList'
import MemberList from './MemberList'
import ServerList from './ServerList'

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<ServerList />
				<ChannelList />
				<Channel />
				<MemberList />
			</div>
		)
	}
}
