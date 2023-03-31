import React from 'react';
import { Link } from 'react-router-dom';
import './EventAndVolunterSidevar.css';
import plus from '../../logos/plus 1.png'
import uservolenter from '../../logos/users-alt 1.png'
const EventAndVolunterSidevar = () => {

    return (
        <div>
            <div className='side-navigate'>
                <div className='sidevar-containerr' >
                    <div className='sidevarbtn-container'>
                        <Link className='link ' to='/admin/volunteerRegisterList'>
                            <div className='logoWithlink'>
                                <img className='plusLogo' src={uservolenter} alt="" />
                                <p className='valunterlistswitch'>volunteer Register List</p>
                            </div>

                        </Link>
                    </div>
                    <div className='sidevarbtn-container'>
                        <Link className='link ' to='/admin/addEvent'>
                            <div className='logoWithlink'>

                                <img className='eventlogo' src={plus} alt="" />
                                <p className='addeventSwitch' >Add Event</p>

                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EventAndVolunterSidevar;