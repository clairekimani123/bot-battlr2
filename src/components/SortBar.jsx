import React from 'react';

function SortBar({ sortBy, onChange }) {
  return (
    <div className="sort-bar">
      <h3>Sort by</h3>
      <select value={sortBy} onChange={(e) => onChange(e.target.value)} className="sort-select">
        <option value="">Select</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;