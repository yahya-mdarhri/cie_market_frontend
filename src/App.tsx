import './root.css'
import { Router } from './router'
import axios from 'axios';  
axios.defaults.baseURL = "https://backendciemarketplace-56178e577139.herokuapp.com/";
axios.defaults.withCredentials = true;


function App() {
	return <Router />;
}

export default App
