import { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourArmyBot';
import BotSpecs from './components/BotSpecs';
import ClassFilter from './components/ClassFilter';
import SortBar from './components/SortBar';

const API_URL = 'https://bot-backend-fqwo.onrender.com/bots';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filters, setFilters] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(err => console.error('Failed to fetch bots:', err));
  }, []);

  const enlistBot = (bot) => {
    const alreadyInClass = army.find(b => b.bot_class === bot.bot_class);
    const alreadyInArmy = army.find(b => b.id === bot.id);
    if (!alreadyInArmy && !alreadyInClass) {
      setArmy([...army, bot]);
    }
  };

  const removeBot = (id) => {
    setArmy(prevArmy => prevArmy.filter(bot => bot.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          setArmy(prevArmy => prevArmy.filter(bot => bot.id !== id));
          setBots(prevBots => prevBots.filter(bot => bot.id !== id));
        } else {
          console.error('Failed to discharge bot.');
        }
      })
      .catch(err => console.error('Error during discharge:', err));
  };

  const toggleFilter = (cls) => {
    setFilters(prevFilters =>
      prevFilters.includes(cls)
        ? prevFilters.filter(c => c !== cls)
        : [...prevFilters, cls]
    );
  };

  const filteredBots = filters.length
    ? bots.filter(bot => filters.includes(bot.bot_class))
    : bots;

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (!sortBy) return 0;
    return b[sortBy] - a[sortBy];
  });

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy army={army} onRemove={removeBot} onDischarge={dischargeBot} />
      <ClassFilter selected={filters} onToggle={toggleFilter} />
      <SortBar sortBy={sortBy} onChange={setSortBy} />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={(bot) => {
            enlistBot(bot);
            setSelectedBot(null);
          }}
        />
      ) : (
        <BotCollection
          bots={sortedBots}
          onCardClick={setSelectedBot}
        />
      )}
    </div>
  );
}

export default App;