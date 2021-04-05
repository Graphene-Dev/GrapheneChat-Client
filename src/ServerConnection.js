export default class ServerConnection {
	constructor(ip, onMessage) {
		this.ws = new WebSocket("ws://"+ip)

		this.onMessage = onMessage

		this.ws.addEventListener("message", (msg) => {
			this.onMessage(msg.data)
		});
	}

	send(msg) {
		this.ws.send(msg)
	}
}
