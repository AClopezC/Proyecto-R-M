import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   const { onSearch } = props;


   const [id, setId] = useState('')

   function changeHandler(event) {
      let input = event.target.value;

      setId(input);
   }
   return (
      <div className={style.container}>
         <input type='search' className={style.search} value={id} onChange={changeHandler} />
         <button className={style.button} onClick={() => { onSearch(id) }}>Buscar</button>
      </div>
   );
}