import React from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

type PokemonListResult = {
  name: string;
  url: string;
};

type PokemonCardProps = {
  id: number;
  name: string;
  types: string[];
};

type PokemonTypeObject = {
  type: {
    name: string;
  };
};

const App: React.FC = () => {
  const [allPokemon, setAllPokemon] = React.useState<string[]>([]);
  const [matchingPokemon, setMatchingPokemon] = React.useState<
    PokemonCardProps[]
  >([]);
  const [error, setError] = React.useState<string | null>(null);

 
  React.useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=500"
        );
        const data = await response.json();
        setAllPokemon(
          data.results.map((pokemon: PokemonListResult) => pokemon.name)
        );
      } catch (error) {
        setError("Failed to load Pokémon list.");
      }
    };

    fetchAllPokemon();
  }, []);


  const fetchPokemonData = async (input: string) => {
    if (!input.trim()) {
      setError("Please input a Pokémon name first.");
      setMatchingPokemon([]);
      return;
    }

    const filteredNames = allPokemon.filter((name) =>
      name.includes(input.toLowerCase())
    );

    if (!filteredNames.length) {
      setError("No Pokémon found matching your query.");
      setMatchingPokemon([]);
      return;
    }

    const pokemonDetailsPromises = filteredNames.map((name) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
        res.json()
      )
    );

    try {
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      setMatchingPokemon(
        pokemonDetails.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map(
            (typeObj: PokemonTypeObject) => typeObj.type.name
          ),
        }))
      );

      setError(null);
    } catch (error) {
      setError("Error fetching Pokémon details.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">Pokemon Finder</h1>
      <SearchBar onSearch={fetchPokemonData} />
      {error && <div className="mt-4 text-red-500">{error}</div>}
      <div className="flex flex-wrap justify-center w-full mt-4">
        {matchingPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
