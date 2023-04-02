import React, { useEffect, useState } from 'react';
// import VSingelService from '../VSingelService/VSingelService';
import './VolenterService.css'
// import { Card } from 'react-bootstrap';
// import photo1 from '../../../images/childSupport.png';
// import photo2 from '../../../images/refuseShelter.png';
// import photo3 from '../../../images/foodCharity.png';
// import photo4 from '../../../images/clothSwap.png';
// import photo5 from '../../../images/riverClean.png';
// import photo6 from '../../../images/cleanWater.png';
// import photo7 from '../../../images/goodEducation.png';
// import photo8 from '../../../images/newBooks.png';
// import photo9 from '../../../images/studyGroup.png';
// import photo10 from '../../../images/birdHouse.png';
// import photo11 from '../../../images/libraryBooks.png';
// import photo12 from '../../../images/driveSafety.png';
// import photo13 from '../../../images/musicLessons.png';
// import photo14 from '../../../images/voteRegister.png';
// import photo15 from '../../../images/clearnPark.png';
// import photo16 from '../../../images/ITHelp.png';
// import photo17 from '../../../images/animalShelter.png';
// import photo18 from '../../../images/babySit.png';
// import photo19 from '../../../images/stuffedAnimals.png';
// import photo20 from '../../../images/schoolSuffiles.png';

const VolenterService = () => {
    const [volenterServices, setVolenterServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setVolenterServices(data))
    }, [])

    return (
        <div>
            <div>
                <div className='card-container'>
                    {
                        volenterServices.map(volenterService => <div
                            key={volenterService.key}
                            volenterServices={volenterServices}
                            img={volenterService.img}
                        ></div>)}

                    <div className='singleCard yellow'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/DKL71sN/child-Support.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> child Support</h3>

                        </div>
                    </div>
                    <div className='singleCard orange'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/1bPynTm/refuse-Shelter.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Refuge Shelter</h3>

                        </div>
                    </div>
                    <div className='singleCard blue'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/F0Q7wjp/food-Charity.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Food Charity</h3>

                        </div>
                    </div>
                    <div className='singleCard perpul'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/sRW8JLP/cloth-Swap.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Host a Clothing Swap</h3>

                        </div>
                    </div>
                    <div className='singleCard blue'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/VTYCVrT/river-Clean.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Host a river clean up</h3>

                        </div>
                    </div>
                    <div className='singleCard perpul'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/n7gXmYX/clean-Water.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3> Clean Water For Children</h3>

                        </div>
                    </div>
                    <div className='singleCard yellow'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/QPRrrzs/good-Education.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Good Education</h3>

                        </div>
                    </div>
                    <div className='singleCard orange'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/8YZLtzL/newBooks.png" alt="" />
                        </div>
                        <div className='card-title double-Line '>
                            <h3> New Books For Children</h3>

                        </div>
                    </div>
                    <div className='singleCard yellow'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/gMR7PVm/study-Group.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Host a Study Group</h3>

                        </div>
                    </div>
                    <div className='singleCard blue'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/Lnmq5bZ/bird-House.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3> Build birdhouses for
                                your neighbors.</h3>

                        </div>
                    </div>
                    <div className='singleCard orange'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/LDK8kWr/library-Books.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3> Organize books at
                                the library.</h3>

                        </div>
                    </div>
                    <div className='singleCard perpul'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/80Cnb4D/drive-Safety.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3> Give a seminar on
                                driving safety.</h3>

                        </div>
                    </div>
                    <div className='singleCard perpul'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/ZhkjjK8/music-Lessons.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3> Give free music
                                lessons.</h3>

                        </div>
                    </div>
                    <div className='singleCard yellow'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/fqJP2j6/vote-Register.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3> Teach people how
                                to register to vote.</h3>

                        </div>
                    </div>
                    <div className='singleCard blue'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/1zLBPgj/clearn-Park.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3> Clean up your
                                local park.</h3>

                        </div>
                    </div>
                    <div className='singleCard orange'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/8MBwJ8X/ITHelp.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3>Give IT help to
                                local adults</h3>

                        </div>
                    </div>
                    <div className='singleCard yellow'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/D713XyC/animal-Shelter.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Foster a shelter
                                animal.</h3>

                        </div>
                    </div>
                    <div className='singleCard blue'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/kSGQPxw/babySit.png" alt="" />
                        </div>
                        <div className='card-title double-Line'>
                            <h3>Babysit during PTA
                                meetings.</h3>

                        </div>
                    </div>
                    <div className='singleCard orange'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/cCry5fx/stuffed-Animals.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Collect stuffed
                                animals.</h3>

                        </div>
                    </div>
                    <div className='singleCard perpul'>
                        <div className='card-img'>
                            <img src="https://i.ibb.co/MRFHpGw/school-Suffiles.png" alt="" />
                        </div>
                        <div className='card-title one-line'>
                            <h3> Collect school
                                supplies.</h3>

                        </div>
                    </div>


                </div>

            </div>
        </div>



    );
};

export default VolenterService;