import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Error from './components/Error/Error';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';


// const email = 'andresclc55@gmail.com';
// const password = '123aclc';
const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate("/home");
         
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const searchHandler = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };
      } catch (error) {
         alert('¡No hay personajes con este ID');
      }
   };

   
   function closeHandler(id) {
      let deleted = characters.filter((character) => character.id !== (id));
      setCharacters(deleted);
   }

   
   return (
      <div className="App">
         {
            location.pathname !== '/' && <NavBar onSearch={searchHandler} />
               //? Condicional= Si la primera condición da true, arrójame en NavBar.
         }
         
       <Routes>
            <Route path="/" element={<Form login={login} />} />
         <Route
           path="/home"
           element={<Cards characters={characters} onClose={closeHandler} />}
         />
         <Route path="/Detail/:id" element={<Detail />} />
         <Route path="/About" element={<About />} />
         <Route path="*" element={<Error />} />{" "}
            {/* Esto sirve para que toda ruta que no sea ninguna de las anteriores me redirija a un lugar en particular*/}
         <Route path='/Favorites' element={<Favorites/>} />
       </Routes>
     </div>
   );
}

export default App;