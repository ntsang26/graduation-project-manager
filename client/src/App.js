import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import MainStudent from './components/Student/MainStudent.js';
import MainTeacher from './components/Teacher/MainTeacher.js';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Login />} />
          <Route index path="/students" element={<MainStudent />} />
          <Route index path="/teachers" element={<MainTeacher />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
