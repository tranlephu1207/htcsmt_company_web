import './App.scss';

import Contact from './components/contact/Contact';
import MediaQuery from 'react-responsive'
import Menu from './components/menu/Menu';
import Topbar from './components/topbar/Topbar';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MediaQuery minWidth={992}>
        {(matches) => !matches && (
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        )}
      </MediaQuery>
      <div className='sections'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
