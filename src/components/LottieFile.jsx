import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class LottieFile extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        player: "#firstLottie",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 100],
          },
        ],
      });
    });
  }
  render() {
    return (
      <div className="LottieFile">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          loop
          autoplay
          mode="normal"
          src="https://assets1.lottiefiles.com/packages/lf20_yCjSOH1fA9.json"
          className="lottieFilesStyle" //styled in index.css
        ></lottie-player>
      </div>
    );
  }
}

export default LottieFile;
