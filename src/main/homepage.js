import React from 'react';
import Profile from './components/profile/profile.js';
import Journey from './components/journey/Journey';
import '../css/homepage.css'

class App extends React.Component {
    componentDidMount() {
        document.title = "neonshobhit"
    }
    render() {
        return (
            <>
                <Profile />
                <div className="journey-center">
                    <Journey />
                </div>
            </>
        )
    }
}

export default App;