import './App.css';
import React, { useState } from "react";
import { GitReadme4 } from "./components/GitReadme4.js"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

//https://www.debugbear.com/blog/react-rerenders

export default function App() {

	console.log("rendering app.js")
	const [reponame, setReponame] = useState("");
	const [isshow, setIsshow] = useState(false);
	const [state, setState] = useState({
		isPaneOpen: false,
		isPaneOpenLeft: false
	})

	const handleClick = (e) => {
		setIsshow(true);
		setReponame(e.currentTarget.textContent)
	}

	return (
		<div className="App">
			<button onClick={() => setState({ isPaneOpen: true })}>slidingpane demo</button>
			<br />

			<button onClick={(e) => handleClick(e)}>remarkjs/awesome-remark</button>
			<button onClick={(e) => handleClick(e)}>rockerBOO/awesome-neovim</button>
			<button onClick={(e) => handleClick(e)}>neovide/neovide</button>

			<p>Non-github links will be opened in new window</p>
			<br />

			{isshow && <GitReadme4 reponame={reponame} />}


			<SlidingPane
				className="slide-pane"
				overlayClassName="slide-pane__overlay"
				isOpen={state.isPaneOpen}
				title="Hey, it is optional pane title.  I can be component too."
				subtitle="Optional subtitle."
				onRequestClose={() => {
					setState({ isPaneOpen: false });
				}}
			>
				<div>And I am pane content. BTW, what rocks?</div>
				<br />
				<img src="https://raw.githubusercontent.com/neovide/neovide/main/assets/BasicScreenCap.png" alt="Basic screen cap" />
			</SlidingPane>
		</div>
	);
}

