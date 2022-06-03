import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../assets/css/global.scss'

import Index from '../Container/Index'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Index/>}></Route>
                {/* <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="teams" element={<Teams />}>
                        <Route path=":teamId" element={<Team />} />
                        <Route path="new" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />
                    </Route>
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;