import ServerConnection from './ServerConnection'

import testimg from './test.png'

export default class Server {
	constructor(name, ip, update) {
		this.name = name;
		this.img = testimg;
		this.update = update;
		this.conn = new ServerConnection(ip, (msg) => this.onMessage(msg))
		this.channels = [
			{
				name: "test",
				messages: [
					{
						id: 0,
						msg: "testsetset",
						author: 0
					}
				]
			}
		]
	}

	onMessage(msg) {
		this.channels[0].messages.push({
			id: 1,
			msg: msg,
			author: 2
		})
		this.update()
	}

	send(msg) {
		this.conn.send(msg)
	}
}
