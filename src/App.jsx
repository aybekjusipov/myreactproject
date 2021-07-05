import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import AuthContext from "./context/authContext";

function App() {
  return (
    <div className="app">
      <Header />
      <AuthContext.Provider>
        
      </AuthContext.Provider>
    </div>
  );
}

export default App;
