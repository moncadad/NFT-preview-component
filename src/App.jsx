import "./App.css";
import NftImage from "./components/NftImage";
import Info from "./components/Info";
import Creator from "./components/Creator";

function App() {
  return (
    <div className="container">
      <NftImage />
      <Info />
      <hr />
      <Creator />
    </div>
  );
}

export default App;
