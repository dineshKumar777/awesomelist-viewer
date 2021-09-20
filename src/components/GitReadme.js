import React from 'react';
import { useRequest } from "../userRequest"
import MarkdownPreview from "@uiw/react-markdown-preview"


export const GitReadme = props => {
	const gitreponame = props.reponame;
	console.log(`git repo name => ${gitreponame}`);

	const { data, error } = useRequest(gitreponame);

	if(error) return "An error has occured..";

	if(!data) {
		console.log("first try");
		return "Loading...";
	}

	//TODO
	//transformUri contains ./
	return (
		<div>
		 	<MarkdownPreview 
		 	 	source={data}
		 	 	transformImageUri = {uri => 
 	 	 	 	 	uri.startsWith("http") ? uri: `https://raw.githubusercontent.com/${gitreponame}/main/${uri}`
				}
		/>
		</div>
	);
}
