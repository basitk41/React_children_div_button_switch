import "./App.css";
import Tabs from "./Tabs";
function App() {
  return (
    <div className="App">
      <Tabs>
        <div title="Section title 1">Content section 1</div>
        <div title="Section title 2">Content section 2</div>
        <div title="Section title 3">Content section 3</div>
      </Tabs>
    </div>
  );
}

export default App;
