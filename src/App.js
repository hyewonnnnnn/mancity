import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Team from './components/page/Team';
import Player from './components/page/Player';
import Schedule from './components/page/Schedule';
import Home from './components/page/Home';
import News from './components/page/News';
import Club from './components/page/Club';
import Result from './components/page/Result';



function App() {
  return (
    <div className="App">
<>
<BrowserRouter>
  <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/club" element={<Club />} />
      <Route path="/player" element={<Player />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/news" element={<News />} />
  </Routes>
</BrowserRouter>
</>

</div>

  );
}

export default App;