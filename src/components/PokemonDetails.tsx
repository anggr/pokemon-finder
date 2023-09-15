import React from 'react';

type PokemonDetailsProps = {
  id: number;
  name: string;
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id, name }) => {
  return (
    <div className="h-44 w-32 bg-white rounded-xl flex flex-col items-center justify-center shadow duration-300 hover:bg-white hover:shadow-xl m-2">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="self-center"
      />
      <span className="mt-1 text-sm leading-5 font-semibold text-center">
        {name}
      </span>
    </div>
  );
};

export default PokemonDetails;
