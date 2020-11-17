import React from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';
// import './App.css';

class App extends React.Component {
  render() {
    return(
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <Link to="/">Beranda</Link> |
            <Link to="/tentangsaya">Tentang Saya</Link>|
            <Link to="/karya">Karya</Link> |
            <Link to="/kontak">Kontak</Link> |
            <Link to="/list" className="nav-link">List</Link>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <p className="text-center"><Utama /></p>
      </div>
    )
  }
}

export default App;
