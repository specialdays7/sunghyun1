import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderCon from './containers/HeaderCon';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import OnePage from "./pages/OnePage";
import ModifyCon from './containers/ModifyCon';

function App() {
  return (
    <Routes>
      <Route element={<HeaderCon />} >
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegPage />} />
        <Route path="/list" element={<ListPage />} /> 
        <Route path="/one/:id" element={<OnePage />} />
        <Route path="/modify/:id" element={<ModifyCon />} />        
      </Route>
    </Routes>
  );
}

export default App;

