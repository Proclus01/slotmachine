import './App.css';
import SlotMachine from './SlotMachine';

function App() {
  // An RNG function to pass independent RNG values as props into each component
  const rng = () => {
    return Math.floor(Math.random() * 3) + 1;
  }

  return (
    <div>
      <h1>Slot Machine!</h1>
      <SlotMachine s1={rng()} s2={rng()} s3={rng()}/>
      <SlotMachine s1={rng()} s2={rng()} s3={rng()}/>
      <SlotMachine s1={rng()} s2={rng()} s3={rng()}/>
    </div>
  );
}

export default App;
