import MarkdownPreview from '@uiw/react-markdown-preview'
import React from 'react'

//TODO
/***
		fix ./ in transformimageURI returned result
		add target=_blank (to open in new window) for non github links
			- and same to all links in slider preview links
https://github.com/jguyon/nupum/blob/ba208f8ef4422a650ff3543fd36104afde7acf50/src/app/package-page/package-page-readme.js
**/

/* return (
	<div>
		<MarkdownPreview
			source={data}
			transformImageUri={uri =>
				uri.startsWith("http") ? uri : `https://raw.githubusercontent.com/${gitreponame}/${defaultBranchname}/${uri}`
			}
		/>
	</div>
) */

export const ReadmePreview = React.memo(function ReadmePreivew({ data, gitreponame, defaultBranchname }) {
	console.log('rendering readmepreviewer');

	return (
		<div>
			<MarkdownPreview
				source={data}
				transformImageUri={uri =>
					uri.startsWith("http") ? uri : `https://raw.githubusercontent.com/${gitreponame}/${defaultBranchname}/${uri}`
				}
			/>
		</div>
	)
});
