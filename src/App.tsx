import { Routes, Route } from "react-router-dom";

import Homepage from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Papers from "./views/Papers";
import PaperShowcase from "./views/PaperShowcase";
import Notfound from "./views/NotFound";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/papers" element={<Papers />} />
				<Route path="/paper/:paperIndex" element={<PaperShowcase />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;