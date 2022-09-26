
import './App.css';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from '../../my-app15/src/Pages/Home';
function App() {
  return (
    <BrowserRouter>
   
   <Route path='/' exact component={Home} />
   
    </BrowserRouter>
);
}

export default App;
