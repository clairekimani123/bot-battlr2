function ClassFilter({ selected, onToggle }) {
    const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  
    return (
      <div className="class-filter">
        <h3>Filter by Class</h3>
        {classes.map(cls => (
          <label key={cls}>
            <input
              type="checkbox"
              checked={selected.includes(cls)}
              onChange={() => onToggle(cls)}
            />
            {cls}
          </label>
        ))}
      </div>
    );
  }
  
  export default ClassFilter;
  