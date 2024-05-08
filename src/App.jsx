import "./assets/scss/_Slider.scss";
import MySlider from "./components/MySlider.jsx";
import MyRGBPanel from "./components/MyRGBPanel.jsx";

function App() {
  return (
    <div className="App">
      <header className="slider-item">
        <MyRGBPanel />
      </header>
    </div>
  );
}

export default App;
