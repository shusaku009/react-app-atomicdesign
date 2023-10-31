import { PrimaryButton } from './components/atoms/PrimaryButton';
import { SecondaryButton } from './components/atoms/SecondaryButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}

export default App;
