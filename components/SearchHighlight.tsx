import React from 'react';

interface SearchHighlightProps {
  text: string;
  highlight: string;
}

export const SearchHighlight: React.FC<SearchHighlightProps> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong key={index} className="font-bold text-kayjay-gold bg-yellow-100">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
};