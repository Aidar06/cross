import './App.scss'
import Header from "./components/Header/header.jsx";
import { Routes, Route} from "react-router-dom";
import Mane from "./components/Mane/mane.jsx";
import Favorite from "./components/Favorite/favorite.jsx";
import Details from "./components/Details/details.jsx";
import Contacts from "./components/Contacts/contacts.jsx";

function App() {

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Mane />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </>
  )
}

export default App
