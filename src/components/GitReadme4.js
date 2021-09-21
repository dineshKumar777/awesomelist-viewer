import React, { useState, useEffect } from 'react';
import { useRequest } from "../userRequest"
import MarkdownPreview from "@uiw/react-markdown-preview"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { ReadmePreview } from "./ReadmePreview"
import { SlidePreviewer } from "./SlidePreviewer";
import { SliderGitReadme } from "./SliderGitReadme";

export const GitReadme4 = React.memo(function GitReadme4({ reponame }) {
	const gitreponame = reponame;
	console.log(`git repo name => ${gitreponame}`);
	const [state2, setState2] = useState({
		isPaneOpen: false,
		isPaneOpenLeft: false,
	});
	// const [isShow, setIsshow] = useState(false);
	const [hlink, setHlink] = useState("nolink");
	const [htext, setHtext] = useState("nohtext");
	// const [clickEvent, setClickEvent] = useState();

	const handleClick2 = (e) => {
		e.preventDefault();
		console.log(`href value : ${e.currentTarget.href}`)
		console.log(`value : ${e.currentTarget.text}`)
		// setClickEvent(e);
		setHlink(e.currentTarget.href);
		setHtext(e.currentTarget.text);
		setState2({ isPaneOpen: true });
		// setIsshow(true);
	}

	const { data, error } = useRequest(gitreponame);
	useEffect(() => {
		if (data) {
			document
				.querySelectorAll('[href*="https"]')
				.forEach((box) => {
					console.log('adding clicklistener github links')
					box.addEventListener('click', (e) => handleClick2(e))
				});

			console.log("inside second useeffect")


			/* return () => {
				document
					.querySelectorAll('[href*="https"]')
					.forEach((box) => {
						console.log('removing clicklistener github links')
						box.addEventListener('click', (e) => handleClick2(e))
					});
			}; */
		}
	}, [data]);

	if (error) return "An error has occured..";

	if (!data) {
		console.log("first try");
		return "Loading...";
	}
	/* <MarkdownPreview 
				source={data}
				transformImageUri = {uri => 
					uri.startsWith("http") ? uri: `https://raw.githubusercontent.com/${gitreponame}/main/${uri}`
				}
	/> */

	//TODO
	//transformUri contains ./
	// {isShow && <SlidePreviewer isOpenPane={true} hlink={hlink} htext={htext} />}
	return (
		<div>
			<ReadmePreview data={data} gitreponame={gitreponame} />
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
