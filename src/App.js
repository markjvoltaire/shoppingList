import './App.css';
import Header from './components/Header';
import Shopping from './Views/Shopping';
import { ItemProvider } from './context/ItemContext';

function App() {
  return (
    <div>
      <ItemProvider>
        <Header />
        <Shopping />
      </ItemProvider>
    </div>
  );
}

export default App;
