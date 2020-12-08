// import logo from './logo.svg';
import React from 'react'
import './App.css';
import './css/homepage.css';
import shobhit from './public/images/shobhit.png'

class App extends React.Component {

    // constructor(props) {
    //   super(props);
    // }

    // componentDidMount() {
    //     const element = document.getElementById('lorem')
    //     element.scrollIntoView({behavior: "smooth"})
    // }

    render() {
        return (
            <div>
                <div className='homepage-background' >
                    <div className='header'>
                        <div className='head'>
                            <h1 className="header-greet">
                            </h1>
                            <h1 className="line-one header-title">
                            </h1>
                            <h1 className="line-two header-title">
                            </h1>
                            <h1 className='line-three header-title'>
                            </h1>
                            <h1 className='header-title'>
                            </h1>
                        </div>

                    </div>

                    <div className='image-controller'>
                        <img src={shobhit} alt="" className="logo" />
                    </div>
                </div>
                <div>
                    <h1>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    </h1>
                </div>

            </div >

        )
    }
}

export default App;