import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import sky from "./assets/2646520.jpg";
import superMan from "./assets/superMan.gif";

function App() {
  return (
    <div className="App">
      <Parallax pages="2">
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${sky})`, backgroundSize: "contain" }}
        >
          <h2>HELLOO!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          sticky={{ start: 0.3, end: 1.5 }}
          style={{ textAlign: "center", paddingTop: 50 }}
        >
          <img src={superMan} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
