import React, { useEffect, useState } from 'react';
import './VolunteerRegisterList.css'
import plus from '../../../logos/plus 1.png';
import trash from '../../../logos/trash-2 9.png'
import EventAndVolunterSidevar from '../../../SharedComponant/EventAndVolunterSidevar/EventAndVolunterSidevar';
import './VolunteerRegisterList.css'
const VolunteerRegisterList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/register')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div >
            <div className='sidebarandlist'>
                <div className='sidevar'>
                    <div> <EventAndVolunterSidevar /></div>
                </div>
                <div className='listandTable'>
                    <div className='listTitle'>
                        <h3>Volunteer Register List</h3>

                        {
                            users.map(user => <div key={users._id}></div>)
                        }

                    </div>
                    <div className='valunter-register'>

                        <div className='list'>
                            <div className=' table-container'>
                                <div class="thead grid grid-cols-5 gap-4">
                                    <div className="divs">
                                        Name
                                    </div>
                                    <div className="divs">
                                        Email
                                    </div>
                                    <div className="divs">
                                        Registering Date
                                    </div>
                                    <div className="divs">
                                        Volenteer List
                                    </div>
                                    <div className="divs">
                                        Action
                                    </div>
                                </div>
                                {
                                    users.map(user => <div key={users._id}><div class=" grid grid-cols-5 gap-4">
                                        <div className="divs">
                                            {user.name}
                                        </div>
                                        <div className="divs">
                                            {user.email}
                                        </div>
                                        <div className="divs">
                                            {user.date}
                                        </div>
                                        <div className="divs">
                                            {user.volunteerServiceType}
                                        </div>
                                        <div className="divs">
                                            <button className='plus  '>

                                                <div className='tooltips'>
                                                    <div> <img src={plus} alt="+" /></div>
                                                    <span class="tooltiptext">edit</span>
                                                </div>
                                            </button>
                                            <button className='trash'>
                                                <div className='tooltips'>
                                                    <div><img src={trash} alt="" /></div>
                                                    <span class="tooltiptext">Delete</span>
                                                </div>

                                            </button>
                                        </div>
                                    </div></div>)
                                }


                            </div >
                        </div>
                    </div >
                </div>


            </div>
        </div>
    );
};

export default VolunteerRegisterList;