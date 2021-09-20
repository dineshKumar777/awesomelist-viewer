import MarkdownPreview from '@uiw/react-markdown-preview'
import React from 'react'


export const ReadmePreview = React.memo(function ReadmePreivew({data, gitreponame}) {
	console.log('rendering readmepreviewer');

	return (
		<div>
		 	<MarkdownPreview 
		 	 	source={data}
		 	 	transformImageUri = {uri => 
 	 	 	 	 	uri.startsWith("http") ? uri: `https://raw.githubusercontent.com/${gitreponame}/main/${uri}`
				}
			/>
		</div>
	)
});
