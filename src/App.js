import { BrowserRouter } from 'react-router-dom';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import './styles.css';
import { DefaultLayout } from './components/templates/DefaultLayout';

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
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
