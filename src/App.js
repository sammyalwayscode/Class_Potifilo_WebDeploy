import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Debby from './Components/NavPage/Debby';
import Ola from './Components/NavPage/Ola';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/debby" exact component={Debby} />
        <Route path="/ola" exact component={Ola} />
      </Switch>
    </BrowserRouter>



    // <div>
    //   <Header />
    // </div>
  );
}

export default App;
