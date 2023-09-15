import React from "react";
import SearchBar from "./components/SearchBar";
import PokemonDetails from "./components/PokemonDetails";

const App: React.FC = () => {
  const [pokemonData, setPokemonData] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fetchPokemonData = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (response.ok) {
        const data = await response.json();
        setPokemonData({ id: data.id, name: data.name });
        setError(null);
      } else {
        throw new Error("Pokemon not found");
      }
    } catch (error) {
      setPokemonData(null);
      setError((error as Error).message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Pokemon Finder</h1>
      <SearchBar onSearch={fetchPokemonData} />
      {error && <div className="mt-4 text-red-500">{error}</div>}
      {pokemonData && !error && (
        <PokemonDetails id={pokemonData.id} name={pokemonData.name} />
      )}
    </div>
  );
};

export default App;
