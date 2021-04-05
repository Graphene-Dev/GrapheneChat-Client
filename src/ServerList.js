import React from 'react';
import ReactTooltip from 'react-tooltip';

export default class ServerList extends React.Component {
	componentDidUpdate(prevProps) {
    ReactTooltip.rebuild();
  }

	render() {
		return (
			<div className="server-list">
			 {this.props.servers.map((server) => {
				 return (
					 <div key={server.name} className="server-list-icon">
					   <img src={server.img} alt="" data-tip={server.name} data-for="test"/>
						 <ReactTooltip id="test" effect="solid" place="right" />
					 </div>
				 )
			 })}
			</div>
		)
	}
}
