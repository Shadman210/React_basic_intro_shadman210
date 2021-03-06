import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{
					user => {
						return (
							<ChannelContext.Consumer>
								{
									channel => {
										return <div>User context value {user}	<h1>my channel name is {channel}</h1> </div>
									
									}
								}
							</ChannelContext.Consumer>
						)}
				}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF
