import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actionTypes'

const initialState = {
   myFavorites: [],
   allCharactersFav: []
}

const reducer = (state = initialState, {type, payload}) => { // Ese type y payload está con destructuring, (son acción).
   switch (type) {
      case ADD_FAV:
         return {
           ...state,
           myFavorites: [...state.allCharactersFav, payload],
           allCharactersFav: [...state.allCharactersFav, payload]
         };
      case REMOVE_FAV:
         return {
           ...state,
           myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
         };
      case FILTER:
         const allCharactersFavFiltered = state.allCharactersFav.filter(character =>
            character.gender === payload)
         return {
            ...state,
            myFavorites:
               payload=== 'allcharacters'
               ? [...state.allCharactersFav]
               : allCharactersFavFiltered
         };
      case ORDER:
         const allCharactersFavCopy = [...state.allCharactersFav]
         return {
           ...state,
           myFavorites:
             payload === "A"
               ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
               : allCharactersFavCopy.sort((a, b) => b.id - a.id)
         };
         
         default: //Siempre se debe retornar esto.
         return {...state}
   }
}

export default reducer;