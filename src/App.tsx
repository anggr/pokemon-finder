import React from 'react';
import SearchBar from './components/SearchBar';
import PokemonDetails from './components/PokemonDetails';

const App: React.FC = () => {
  const [pokemonData, setPokemonData] = React.useState<{ id: number; name: string } | null>(null);

  const fetchPokemonData = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      if (data) {
        setPokemonData({ id: data.id, name: data.name });
      } else {
        setPokemonData(null);
        alert('Pokemon not found!');
      }
    } catch (error) {
      alert('Error fetching data');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Pokemon Finder</h1>
      <SearchBar onSearch={fetchPokemonData} />
      {pokemonData && <PokemonDetails id={pokemonData.id} name={pokemonData.name} />}
    </div>
  );
};

export default App;
