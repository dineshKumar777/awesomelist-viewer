import { useRequest } from "../userRequest"
import { ReadmePreview } from "./ReadmePreview";
import {FulfillingBouncingCircleSpinner}  from "react-epic-spinners"

export const SliderGitReadme = ({ gitreponame }) => {
	console.log('rendering sliderGitreadme')

	const { data, error, repo } = useRequest(gitreponame);

	if (error) return "An error has occured";

	if (!data) {
		console.log('fetching data')
		return <FulfillingBouncingCircleSpinner	color='#000000'	size='50'/> ;
	}

	return (
		<div>
			<ReadmePreview data={data} gitreponame={gitreponame} defaultBranchname={repo.default_branch} />
		</div>
	)
}
