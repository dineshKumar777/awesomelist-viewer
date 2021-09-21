import { useRequest } from "../userRequest"
import { ReadmePreview } from "./ReadmePreview";

export const SliderGitReadme = ({ gitreponame }) => {
	console.log('rendering sliderGitreadme')

	const { data, error } = useRequest(gitreponame);

	if (error) return "An error has occured";

	if (!data) {
		console.log('fetching data')
		return 'Loading..'
	}

	return (
		<div>
			<ReadmePreview data={data} gitreponame={gitreponame} />
		</div>
	)
}
