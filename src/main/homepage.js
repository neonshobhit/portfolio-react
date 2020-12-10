import React from 'react';
import Profile from './components/profile/profile.js';
import Journey from './components/journey/Journey';
import '../css/homepage.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <Profile />
                <div className="journey-center">
                    <Journey />
                </div>

            </div>
        )
    }
}

export default App;