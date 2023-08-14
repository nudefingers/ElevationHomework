import './App.css';
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import CurrentTime from "./components/CurrentTime";
import Posts from "./components/Posts";

function App() {
    return (
        <div className="App">
            <Exercise1 />
            <Exercise2 />
            <CurrentTime />
            <Posts />
        </div>
    )
}

export default App;
