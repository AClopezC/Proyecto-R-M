import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
  return (
    <div className={style.list}>
        {
           characters.map((character) => (
              <Card key={character.id} character={character} onClose={onClose} />
           ))}
    </div>
  );
}

// haciendo pruebas con git hub
