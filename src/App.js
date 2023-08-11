import HeaderComponent from "./components/Header/Header.component";
import Login from "./components/Login/Login";
import { useState } from "react";
import Home from "./components/Home/Home";
import LoginContext from "./ctx/loginContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <LoginContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
        }}
      >
        <HeaderComponent />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home />}
        </main>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
