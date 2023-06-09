import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {

   const dispatch = useDispatch();
   const [aux, setAux] = useState(false);
   
   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(true);
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
   }

   return (
     <div>
       <select onChange={handleOrder}>
         <option value="A">ASCENDENTE</option>
         <option value="D">DESCENDENTE</option>
       </select>
       <select onChange={handleFilter}>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">Unknown</option>
         <option value="allcharacters">All characters</option>
       </select>
       {myFavorites?.map((fav) => {
         return <Card key={fav.id} character={fav} />;
       })}
     </div>
   );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(
   mapStateToProps,
   null
)(Favorites);