import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export const SlidePreviewer = ({ isOpenPane, hlink, htext }) => {
	console.log('rendering slide previewer');
	console.log(`slide => ${htext}`)
	const [sliderState, setSliderState] = useState({
		isPaneOpen: false,
		isPaneOpenLeft: false
	});
	console.log(isOpenPane);
	console.log(sliderState.isPaneOpen)

	return (
		<div>
			<SlidingPane
				className="slide-pane"
				overlayClassName="slide-pane__overlay"
				isOpen={sliderState}
				title="Hey, it is optional pane title.  I can be component too."
				subtitle="Optional subtitle."
				onRequestClose={() => {
					setSliderState({ isPaneOpen: false });
				}}
			>
				<div>And I am pane content. BTW, what rocks?</div>
				<br />
				<img src="https://raw.githubusercontent.com/neovide/neovide/main/assets/BasicScreenCap.png" />
			</SlidingPane>
		</div>
	);
}
