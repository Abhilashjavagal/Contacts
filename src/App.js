import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import { Header } from "./Components/Header/Header";
import { UserContextProvider } from "./Context/userContext";
import ContactManager from "./Components/Contacts/ContactManager";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home/*" element={<ContactManager />}></Route>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserContextProvider>
    </div>
  );
}

export default App;