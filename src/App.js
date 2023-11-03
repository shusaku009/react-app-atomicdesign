import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';
import './styles.css';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
