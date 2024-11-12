import React from 'react';
// map parcourt le tableau items
function List({ items, renderItem }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="border-b pb-2">{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;
