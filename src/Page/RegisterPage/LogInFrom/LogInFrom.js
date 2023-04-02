import React from 'react';
import './LogInFrom.css'
import googleLogo from '../../../logos/google-logo.png'
import Header from '../../../SharedComponant/Header/Header';
import './LogInFrom.css'
import { Link } from 'react-router-dom';
const LogInFrom = () => {
    return (
        <div>
            <Header />
            <div>
                <div className='LogInFrom'>
                    <h3>Log in with</h3>
                    <button className='googlebtn'>
                        <div className='googlebtn-element'>
                            <div className='gLogo'>
                                <img src={googleLogo} alt="" />
                            </div>
                            <div className='CwG'>
                                Continue with Google
                            </div>
                        </div>
                    </button>
                    <h5>Don't have an account?<Link className='link ' to='/register'>Register as a Volunter</Link></h5>
                </div>
            </div>
        </div>
    );
};

export default LogInFrom;