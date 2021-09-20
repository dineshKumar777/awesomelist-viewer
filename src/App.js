import './App.css';
import  React, { useState } from "react";
// import { useRequest } from "./userRequest"
import { GitReadme } from "./components/GitReadme.js"
// import { GitReadme2 } from "./components/GitReadme2.js"
import { GitReadme3 } from "./components/GitReadme3.js"
import { GitReadme4 } from "./components/GitReadme4.js"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// const fetcher = (url) => fetch(url).then((res) => res.text());
//https://www.debugbear.com/blog/react-rerenders

const FetchReadme = React.memo(function FetchReadme({name}) {
	console.log(`Rendering ${name}`);
	return (
			<div>
				{name}
		 	</div>
		);
});

export default function App() {
 	// const {data, error} = useSWR("https://raw.githubusercontent.com/rockerBOO/awesome-neovim/master/README.md");
 	/* const {data, error} = useRequest("rockerBOO/awesome-neovim");

	if(error) return "An error has occured..";
	if (!data) return "Loading.."; */

// const reponame = "rockerBOO/awesome-neovim";

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


	/* const handleClick = React.useCallback((e) => {
		setIsshow(true);
		setReponame(e.currentTarget.textContent)
	}, []); */

	// {isshow && <GitReadme reponame={reponame} /> }
	/* <button onClick={(e) => handleClick(e)}>remarkjs/awesome-remark</button>
			<button onClick={(e) => handleClick(e)}>rockerBOO/awesome-neovim</button>
			<button onClick={(e) => handleClick(e)}>neovide/neovide</button> */

	/* <button onClick={(e) => handleClick(e)}>remarkjs/awesome-remark</button>
			<button onClick={(e) => handleClick(e)}>rockerBOO/awesome-neovim</button>
			<button onClick={(e) => handleClick(e)}>neovide/neovide</button> */
		// <FetchReadmeBtn name="remarkjs/awesome-remark" />
	//
	
	/* const handleClick = (e) => {
		console.log(e.currentTarget.textContent)
			return <div><GitReadme reponame={e.currentTarget.textContent} /></div>
	} */
		// <GitReadme reponame="remarkjs/awesome-remark" />
		// <FetchReadme name="test" />
		// <GitReadme3 reponame="remarkjs/awesome-remark" />
  return (
    <div className="App">
		<button onClick={() => setState({ isPaneOpen: true})}>slidingpane</button>
		<br />

		<button onClick={(e) => handleClick(e)}>remarkjs/awesome-remark</button>
		<button onClick={(e) => handleClick(e)}>rockerBOO/awesome-neovim</button>
		<button onClick={(e) => handleClick(e)}>neovide/neovide</button>
		{isshow && <GitReadme4 reponame={reponame} /> }

		 	
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
					<img src="https://raw.githubusercontent.com/neovide/neovide/main/assets/BasicScreenCap.png" />
			</SlidingPane>
    </div>
  );
}

