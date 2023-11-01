import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import './styles.css';

const user = {
  name: "しゅう",
  image: "https://source.unsplash.com/BJaqPaH6AGQ",
  email: "1234@example.com",
  phone: "090-111-1234",
  company: {
    name: "テスト株式会社"
  },
  website: "https://www.example.com"
}

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
