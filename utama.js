import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Component/beranda';
import TentangSaya from './Component/tentangsaya';
import Karya from './Component/karya';
import Kontak from './Component/kontak';
import List from './list';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
        <Route path="/list" component={List} />
    </Switch>
);

export default Utama;