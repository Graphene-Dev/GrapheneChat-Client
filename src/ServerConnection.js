export default class ServerConnection {
	constructor(ip, onMessage) {
		this.ws = new WebSocket("ws://"+ip)

		this.onMessage = onMessage

		this.ws.addEventListener("message", (msg) => {
			this.onMessage(msg.data)
		});

		this.ws.onopen = (event) => {
			this.ws.send(JSON.stringify({type:"LAST_50", data: null}))
		}
	}

	send(msg) {
		this.ws.send(msg)
	}
}
