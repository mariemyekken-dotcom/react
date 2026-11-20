
import "./App.css";

import Header from "./components/header/Header";
import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login.jsx";

function App() {
    return (
        <div className="App">

            <Header />

            <Destinations />

            <Footer />

            
            <Login/>

        </div>
    );
}

export default App;
