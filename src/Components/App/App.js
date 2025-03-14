import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import About from '../About/About';
import Header from '../Header/Header';
import Home from '../Home/Home'
import BadURL from '../BadURL/BadURL'
import theme from '../../theme';
import Pocket from '../Pocket/Pocket'
import { ThemeProvider } from '@mui/material/styles';

import './App.css';


const App = () => {

  const [jokes, setJokes] = useState({})
  const [e, setError] = useState('')
  const [pocket, setPocket] = useState([])

  const getJokes = async () => {
    let url = "https://icanhazdadjoke.com/";
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJokes(response.data);
    } catch (e) {
      setError(e)
      console.log(e);
    }

  }
  useEffect(() => {
    getJokes()
  }, [])

  const addJoke = (joke) => {
    if (!pocket.some(item => item.id === joke.id))
      setPocket([...pocket, joke]);
  }

  const deleteJoke = (event, joke) => {
    const deletion = pocket.filter(item => item.id !== event.id)
    setPocket([...deletion])
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {e && e}
        <Routes>
          <Route path='/' element={(<Home jokes={jokes} getJokes={getJokes} addJoke={addJoke} />)} />
          <Route path="/pocket" element={(<Pocket pocket={pocket} deleteJoke={deleteJoke} />)} />
          <Route path="/about" element={(<About />)} />
          <Route path='/*' element={(<BadURL />)} />
        </Routes>
      </div>

     
    </ThemeProvider>
  );
}

export default App;
