import React from 'react';

const VSingelService = (props) => {
    const { key, serviceName, img } = props

    console.log(props.serviceName)
    return (
        <div>

            <div className='singleCard yellow'>
                <div className='card-img'>
                    <h1>hellow</h1>
                    <img src={img} alt="" />
                </div>
                <div className='card-title one-line'>
                    <h3> name{serviceName}</h3>
                    <h3> id {key}</h3>
                </div>
            </div>
            {/* <div className='card-container'>


                <div className='singleCard yellow'>
                    <div className='card-img'>
                        <img src={photo1} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> child Support</h3>

                    </div>
                </div>
                <div className='singleCard orange'>
                    <div className='card-img'>
                        <img src={photo2} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Refuge Shelter</h3>

                    </div>
                </div>
                <div className='singleCard blue'>
                    <div className='card-img'>
                        <img src={photo3} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Food Charity</h3>

                    </div>
                </div>
                <div className='singleCard perpul'>
                    <div className='card-img'>
                        <img src={photo4} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Host a Clothing Swap</h3>

                    </div>
                </div>
                <div className='singleCard blue'>
                    <div className='card-img'>
                        <img src={photo5} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Host a river clean up</h3>

                    </div>
                </div>
                <div className='singleCard perpul'>
                    <div className='card-img'>
                        <img src={photo6} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3> Clean Water For Children</h3>

                    </div>
                </div>
                <div className='singleCard yellow'>
                    <div className='card-img'>
                        <img src={photo7} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Good Education</h3>

                    </div>
                </div>
                <div className='singleCard orange'>
                    <div className='card-img'>
                        <img src={photo8} alt="" />
                    </div>
                    <div className='card-title double-Line '>
                        <h3> New Books For Children</h3>

                    </div>
                </div>
                <div className='singleCard yellow'>
                    <div className='card-img'>
                        <img src={photo9} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Host a Study Group</h3>

                    </div>
                </div>
                <div className='singleCard blue'>
                    <div className='card-img'>
                        <img src={photo10} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3> Build birdhouses for
                            your neighbors.</h3>

                    </div>
                </div>
                <div className='singleCard orange'>
                    <div className='card-img'>
                        <img src={photo11} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3> Organize books at
                            the library.</h3>

                    </div>
                </div>
                <div className='singleCard perpul'>
                    <div className='card-img'>
                        <img src={photo12} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3> Give a seminar on
                            driving safety.</h3>

                    </div>
                </div>
                <div className='singleCard perpul'>
                    <div className='card-img'>
                        <img src={photo13} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3> Give free music
                            lessons.</h3>

                    </div>
                </div>
                <div className='singleCard yellow'>
                    <div className='card-img'>
                        <img src={photo14} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3> Teach people how
                            to register to vote.</h3>

                    </div>
                </div>
                <div className='singleCard blue'>
                    <div className='card-img'>
                        <img src={photo15} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3> Clean up your
                            local park.</h3>

                    </div>
                </div>
                <div className='singleCard orange'>
                    <div className='card-img'>
                        <img src={photo16} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3>Give IT help to
                            local adults</h3>

                    </div>
                </div>
                <div className='singleCard yellow'>
                    <div className='card-img'>
                        <img src={photo17} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Foster a shelter
                            animal.</h3>

                    </div>
                </div>
                <div className='singleCard blue'>
                    <div className='card-img'>
                        <img src={photo18} alt="" />
                    </div>
                    <div className='card-title double-Line'>
                        <h3>Babysit during PTA
                            meetings.</h3>

                    </div>
                </div>
                <div className='singleCard orange'>
                    <div className='card-img'>
                        <img src={photo19} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Collect stuffed
                            animals.</h3>

                    </div>
                </div>
                <div className='singleCard perpul'>
                    <div className='card-img'>
                        <img src={photo20} alt="" />
                    </div>
                    <div className='card-title one-line'>
                        <h3> Collect school
                            supplies.</h3>

                    </div>
                </div>


            </div> */}
        </div>
    );
};

export default VSingelService;