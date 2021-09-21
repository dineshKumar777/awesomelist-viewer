import MarkdownPreview from '@uiw/react-markdown-preview'
import React from 'react'

//TODO
/***
		fix ./ in transformimageURI returned result
		add target=_blank (to open in new window) for non github links
			- and same to all links in slider preview links
**/

export const ReadmePreview = React.memo(function ReadmePreivew({ data, gitreponame }) {
	console.log('rendering readmepreviewer');

	return (
		<div>
			<MarkdownPreview
				source={data}
				transformImageUri={uri =>
					uri.startsWith("http") ? uri : `https://raw.githubusercontent.com/${gitreponame}/main/${uri}`
				}
			/>
		</div>
	)
});
