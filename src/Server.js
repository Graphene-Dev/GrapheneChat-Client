import ServerConnection from './ServerConnection'

import testimg from './Graphene.jpg'

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
				messages: []
			}
		]
		this.channelId = 0;

	}

	onMessage(msg) {
		msg = JSON.parse(msg)
		if (msg.type === "NEW_MESSAGE") {
			this.channels[this.channelId].messages.push(msg.data);
		}else if (msg.type === "MSG_LIST") {
			for (var i of msg.list) {
				this.channels[i.channel].messages.push(i);
			}
		}
		this.update()
	}

	send(msg) {
		this.conn.send(JSON.stringify({
			type: "NEW_MESSAGE",
			data:	{
				id: parseInt(new Date().getTime().toString() + this.id.toString().padStart(3,"0").slice(-3)),
				msg: msg,
				author: this.id,
				channel: this.channelId
			}
		}))
	}
}
