import React, { Component } from "react"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

/* const SliderPreview = () => {
	console.log("rendering slider preview");

	return (
		<div>
 	 	 	<SlidingPane
					className="slide-pane"
					overlayClassName="slide-pane__overlay"
					isOpen={state2.isPaneOpen}
					subtitle={hlink}
					title={hrefText}
					onRequestClose={() => {
						setState2({ isPaneOpen: false });
					}}
				>
					<div>{data}</div>
					<br />
			</SlidingPane>

		</div>
	)
} */

const SlidePanelHOC = (linkEventHandler) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				linkEvent: linkEventHandler,
				...this.props
			}
		};
	


		render() {
			const {openPanel} = this.state;
			return (
			<SlidingPane
							className="some-custom-class"
							overlayClassName="some-custom-overlay-class"
							isOpen={openPanel}
							title="Hey, it is optional pane title.  I can be React component too."
							subtitle="Optional subtitle."
							onRequestClose={() => {
								this.setState({ openPanel: false });
							}}
						>
							<div>And I am pane content. BTW, what rocks?</div>
							<br />
				</SlidingPane>
			)
		}
	}
}

export default SlidePanelHOC;
