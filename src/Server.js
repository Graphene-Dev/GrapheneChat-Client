import ServerConnection from './ServerConnection'

import testimg from './test.png'

export default class Server {
	constructor(name, ip, update, id) {
		this.name = name;
		this.img = testimg;
		this.update = update;
		this.id = id
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
		this.channels[0].messages.push(JSON.parse(msg))
		this.update()
	}

	send(msg) {
		this.conn.send(JSON.stringify({
			id: 1,
			msg: msg,
			author: this.id
		}))
	}
}
