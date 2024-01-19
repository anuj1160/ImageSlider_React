import Header from "./Header";
import ImageSlider from "./ImageSlider";
import "./App.css";

function App() {
  const country = "India";
  return (
    <div className="App">
      <Header country={country} />
      <ImageSlider />
    </div>
  );
}

export default App;
