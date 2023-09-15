import React from "react";

type PokemonCardProps = {
  id: number;
  name: string;
  types: string[];
};

const typeColors: { [key: string]: string } = {
  bug: "bg-green-400",
  dragon: "bg-yellow-200",
  electric: "bg-yellow-300",
  fairy: "bg-pink-600",
  fighting: "bg-blue-900",
  fire: "bg-orange-400",
  flying: "bg-teal-300",
  grass: "bg-green-600",
  ground: "bg-yellow-600",
  ghost: "bg-purple-600",
  ice: "bg-blue-300",
  normal: "bg-gray-300",
  poison: "bg-purple-700",
  psychic: "bg-purple-300",
  rock: "bg-gray-800",
  water: "bg-blue-600",
};

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types }) => {
  const primaryType = types[0];
  const bgColorClass = typeColors[primaryType] || "bg-orange-500";

  return (
    <div
      className={`flex flex-col justify-between m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg h-96 ${bgColorClass}`}>
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: "0.1" }}>
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="flex-grow flex items-center justify-center px-10 pt-10">
        <img
          className="w-40"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
        />
      </div>
      <div className="text-white px-6 pb-6 capitalize">
        <span className="flex opacity-75 mb-1">{types.join(", ")}</span>
        <span className="flex font-semibold text-xl">{name}</span>
      </div>
    </div>
  );
};

export default PokemonCard;
