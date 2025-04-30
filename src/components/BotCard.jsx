function BotCard({ bot, onClick, onDischarge }) {
    return (
      <div className="bot-card" onClick={onClick}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
        <p><em>{bot.catchphrase}</em></p>
  
        {onDischarge && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDischarge();
            }}
          >
            x
          </button>
        )}
      </div>
    );
  }
  
  export default BotCard;