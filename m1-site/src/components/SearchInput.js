import React from 'react';

const SearchInput = ({ search, setSearch }) => (
    <div>
        <label className="block mb-2">Rechercher par nom</label>
        <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
);

export default SearchInput;
