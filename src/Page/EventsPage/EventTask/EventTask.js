import React, { useRef } from 'react';
import './EventTask.css';

const EventTask = () => {

    return (
        <div >

            <div className='eventTask'>
                <div className='row'>
                    <div className="column">
                        <div className='task'>
                            <div>
                                <img src="https://i.ibb.co/0ZKkcx6/extra-Volunteer.png" alt="" />
                            </div>
                            <div className='details-side'>
                                <div className='eventTask-details'> <h4>humanitary volunter</h4>
                                    <p>26-mar-2006</p>

                                </div>
                                <div className='cancel'>
                                    <button className='cancelbtn'>Cancel</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="column"><div className='task'>
                        <div>
                            <img src="https://i.ibb.co/0ZKkcx6/extra-Volunteer.png" alt="" />
                        </div>
                        <div className='details-side'>
                            <div className='eventTask-details'> <h4>humanitary volunter</h4>
                                <p>26-mar-2006</p>

                            </div>
                            <div className='cancel'>
                                <button className='cancelbtn'>Cancel</button>
                            </div>
                        </div>

                    </div></div>

                </div>
                <div className='row'>
                    <div className="column"><div className='task'>
                        <div>
                            <img src="https://i.ibb.co/0ZKkcx6/extra-Volunteer.png" alt="" />
                        </div>
                        <div className='details-side'>
                            <div className='eventTask-details'> <h4>humanitary volunter</h4>
                                <p>26-mar-2006</p>

                            </div>
                            <div className='cancel'>
                                <button className='cancelbtn'>Cancel</button>
                            </div>
                        </div>

                    </div></div>
                    <div className="column"><div className='task'>
                        <div>
                            <img src="https://i.ibb.co/0ZKkcx6/extra-Volunteer.png" alt="" />
                        </div>
                        <div className='details-side'>
                            <div className='eventTask-details'> <h4>humanitary volunter</h4>
                                <p>26-mar-2006</p>

                            </div>
                            <div className='cancel'>
                                <button className='cancelbtn'>Cancel</button>
                            </div>
                        </div>

                    </div></div>

                </div>

            </div>
        </div>
    );
};

export default EventTask;