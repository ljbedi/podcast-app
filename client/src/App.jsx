import './App.css'

import Podcast from './pages/Podcast';
import Home from './pages/Home';
// import SubscribedPodcast from './components/SubscribedPodcast';
import PodcastContainer from './pages/PodcastContainer';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/:id" element={<Podcast/>} />
          {/* <Route path="/user/:id" element = {<User/>}/> */}
    
        </Route>

      </Routes>

    </>
  );
}



export default App