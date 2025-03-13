
interface PokemonCard {
  id: number;
  image: string;
  name: string;
  types: string[];
}

const data = [
  {
    id: 1,
    name: "Geodude",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["fire", "poison"]
  },
  {
    id: 2,
    name: "Ivysaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    types: ["fire", "water"]
  },
  {
    id: 4,
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: ["fire", "water"]
  },
  {
    id: 7,
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: ["fire", "poison"]
  },
  {
    id: 4,
    name: "Geodude",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["fire", "water"]
  },
  {
    id: 5,
    name: "Geodude",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["fire", "water"]
  },
  
]
const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  poison: "bg-purple-500"
}; 
function getTypeColor(type: string) {
  const color = typeColors[type];
  return color;
}

const Card = (props: PokemonCard) => {
  return  <div className="bg-white w-2xs">
            {props.id} - {props.name}
            <img src = {props.image}/>
            <div className="flex flex-wrap gap-4 p-4">
              {props.types.map((type) => {
              return <div className={`p-4 ${getTypeColor(type)}`}>{type}</div>
             })}
            </div>
          </div>

 
}

export const App = () => {
  return (
  <div>
    <div className="flex flex-wrap gap-4 p-4">
      {data.map ((item) => {
        return <Card id={item.id} name={item.name} image={item.image} types={item.types} />
      })}
    </div>
  </div>
  );
};

export const Detail = () => {
  return null
}

