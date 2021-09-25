import React, { useState, useEffect } from 'react';
import { useRequest } from "../userRequest"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { ReadmePreview } from "./ReadmePreview"
import { SliderGitReadme } from "./SliderGitReadme";

export const GitReadme4 = React.memo(function GitReadme4({ reponame }) {
	const gitreponame = reponame;
	console.log('rendering gitreadme4')
	console.log(`git repo name => ${gitreponame}`);
	const [state2, setState2] = useState({
		isPaneOpen: false,
		isPaneOpenLeft: false,
	});
	const [hlink, setHlink] = useState("nolink");
	const [htext, setHtext] = useState("nohtext");

	const handleClick2 = (e) => {
		e.preventDefault();
		console.log(`href value : ${e.currentTarget.href}`)
		console.log(`value : ${e.currentTarget.text}`)
		setHlink(e.currentTarget.href);
		setHtext(e.currentTarget.text);
		setState2({ isPaneOpen: true });
	}

	const { data, error, repo } = useRequest(gitreponame);
	useEffect(() => {
		if (data) {
			console.log("inside use effect... " + repo.default_branch)
			document
				.querySelectorAll('[href*="https"]')
				.forEach((httplink) => {
					if (httplink.href.startsWith("https://github.com")) {
						console.log('Adding click listerner to github links');
						httplink.addEventListener("click", (e) => handleClick2(e))
					} else {
						console.log("adding target=_blank for non github links");
						httplink.setAttribute("target", "_blank");
					}
				})

			console.log("inside second useeffect")
		}
	}, [data, repo]);

	if (error) return "An error has occured..";

	if (!data) {
		console.log("first try");
		return "Loading...";
	}

	//TODO
	//transformUri contains ./
	// {isShow && <SlidePreviewer isOpenPane={true} hlink={hlink} htext={htext} />}
	return (
		<div>
			<ReadmePreview data={data} gitreponame={gitreponame} defaultBranchname={repo.default_branch} />
			<SlidingPane
				className="slide-pane"
				overlayClassName="slide-pane__overlay"
				isOpen={state2.isPaneOpen}
				title={htext}
				subtitle={hlink}
				onRequestClose={() => {
					setState2({ isPaneOpen: false });
				}}
			>
				<div>And I am pane content. BTW, what rocks?</div>
				<br />
				<SliderGitReadme gitreponame={hlink.replace('https://github.com/', '')} />
			</SlidingPane>
		</div>
	);
});
