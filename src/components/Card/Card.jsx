import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



function Card(props) {
   const { character, onClose, addFav, removeFav, myFavorites } = props;
  
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(character.id);
      }
      else {
         setIsFav(true);
         addFav(character)
      }
   };

   useEffect(() => {
     myFavorites.forEach((fav) => {
       if (fav.id === character.id) {
         setIsFav(true);
       }
     });
   }, [myFavorites, character]);

   
   
   return (
     <div className={style.container}>
         
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         
       <div className={style.imageContainer}>
         <Link to={`/detail/${character.id}`}>
           <img src={character.image} alt={character.name} />
           <h2>Name: {character.name}</h2>
         </Link>
         <button
           className={style.closeButton}
           onClick={() => {
             onClose(character.id);
           }}
         >
           X
         </button>
       </div>
       <div>
         <h2>Species: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
       </div>
     </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
} 

const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character));
     },
     removeFav: (id) => {
       dispatch(removeFav(id));
     },
   };
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);