import SearchBar from '../SearchBar/SearchBar'
import './NavBar.module.css'
import { Link } from 'react-router-dom';

export default function NavBar({onSearch}) {
   return (
     <div>
       <div>
         <Link to="/about">About</Link>
         <Link to="/home">Home</Link>
         <Link to="/favorites">Favorites</Link>
       </div>
       <div>
         <SearchBar onSearch={onSearch} />
       </div>
     </div>
   );
}
