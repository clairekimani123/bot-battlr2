import BotCard from './BotCard';

function BotCollection({ bots, onCardClick }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => onCardClick(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;