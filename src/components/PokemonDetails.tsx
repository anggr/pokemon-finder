import React from 'react';

interface Props {
  id?: number;
  name?: string;
}

const PokemonDetails: React.FC<Props> = ({ id, name }) => {
  if (!id || !name) {
    return null;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl mb-2">{name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
    </div>
  );
};

export default PokemonDetails;
