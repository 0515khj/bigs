import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import Header from './components/Header';
import MainPage from './pages/Main/MainPage';
import GlobalStyle from './styled/GlobalStyles';
import Board from './pages/board/Board';
import BoardCreate from './pages/board/BoardCreate';
import BoardDetail from './pages/board/BoardDetail';
import BoardEdit from './pages/board/BoardEdit';
import { StoreContext } from './main';

const App = () => {
  const { userStore } = useContext(StoreContext);
 const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    userStore.loadFromSession();
    setLoaded(true);
  }, [userStore]);

  if (!loaded) return null; 

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path='join' element={<Join/>}/>       
            <Route path='login' element={<Login/>}/>
            <Route path='header' element={<Header/>}/>
            <Route path='board' element={<Board/>}/>
            <Route path='boardcreate' element={<BoardCreate/>}/>
            <Route path='board/:id' element={<BoardDetail/>}/>
            <Route path='board/edit/:id' element={<BoardEdit/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;