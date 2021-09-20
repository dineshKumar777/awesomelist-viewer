import React from 'react';

export const GitReadme2 = props => {
	const gitreponame = props.reponame;
	let [responseData, setResponseData] = React.useState('');
	console.log(`git repo name => ${gitreponame}`);

	React.useEffect(() => {
		setResponseData('hello')
		console.log(responseData);
	}, [responseData])

	/* const { data, error } = useRequest(gitreponame);

	if(error) return "An error has occured..";

	if(!data) {
		console.log("first try");
		return "Loading...";
	}else {
		console.log('retrying request');
	} */

	return (
		<div>
		 	<pre>{responseData}</pre>
		</div>
	);
}
