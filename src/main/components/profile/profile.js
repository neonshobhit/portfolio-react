import React from 'react';
import '../../../css/profile/profile.css';
import { useMediaQuery } from 'react-responsive';
import shobhit from '../../../public/images/shobhit.png';


const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
}

const TabletOrDesktop = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 768 });
    return isMobile ? children : null;
}

const func = () => {
    if (!document.getElementById('tap-tap')) return
    let text = document.getElementById('tap-tap').innerText
    if (text !== '') {
        document.getElementById('tap-tap').innerText = ''
        let i=0
        let k = document.getElementsByClassName('header-title')
        for (let x of k) {
            x.classList.add(`automatic${++i}`)
        }
        document.getElementsByClassName('header-greet')[0].classList.add('automatic0')
    }
    else {
        document.getElementById('tap-tap').innerText = 'Tap here!';
        let k = document.getElementsByClassName('header-title')
        let i=0
        for (let x of k) {
            x.classList.remove(`automatic${++i}`)
        }
        let el = document.getElementsByClassName('header-greet')
        el[0].classList.remove('automatic0')
    }
}
class Profile extends React.Component {

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
                    <Mobile>
                        <div className='image-controller-mob'>
                            <img src={shobhit} alt="" className="logo-mob" />
                        </div>
                    </Mobile>

                    <div className='header' onClick={func}>
                        <Mobile>
                            <p id="tap-tap" >
                                Tap here!
                            </p>
                        </Mobile>


                        <div className='head' >

                            <a href="#lorem">
                                <h1 className="header-greet">
                                </h1>
                            </a>

                            <a href="#lorem">
                                <h1 className="line-one header-title">
                                </h1>
                            </a>

                            <a href="#lorem">
                                <h1 className="line-two header-title">
                                </h1>

                            </a>

                            <a href="#lorem">
                                <h1 className='line-three header-title'>
                                </h1>

                            </a>

                        </div>

                    </div>
                    <TabletOrDesktop>
                        <div className='image-controller'>
                            <img src={shobhit} alt="" className="logo" />
                        </div>

                    </TabletOrDesktop>


                </div>
                <div id='lorem'>
                    <h1>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    </h1>
                </div>

            </div >

        )
    }
}

export default Profile;