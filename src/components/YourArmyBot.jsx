import BotCard from './BotCard';

function YourBotArmy({ army, onRemove, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRemove(bot.id)}
            onDischarge={() => onDischarge(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;