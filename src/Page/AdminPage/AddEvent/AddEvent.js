import React, { useRef } from 'react';
import './AddEvent.css';
import uploadBanner from '../../../logos/cloud-upload-outline 1.png';
import EventAndVolunterSidevar from '../../../SharedComponant/EventAndVolunterSidevar/EventAndVolunterSidevar';
import Header from '../../../SharedComponant/Header/Header';

const AddEvent = () => {
    const eventTitleRef = useRef();
    const eventDateRef = useRef();

    const eventDescriptionRef = useRef();
    const eventBannerLinkRef = useRef();



    const handelAddEventFrom = e => {
        e.preventDefault();
        const eventTitle = eventTitleRef.current.value;
        const eventDate = eventDateRef.current.value;
        const eventDescription = eventDescriptionRef.current.value;
        const eventBannerlink = eventBannerLinkRef.current.value;

        const newEvent = { eventTitle, eventDate, eventDescription, eventBannerlink }
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('user added successfully')
                    e.target.reset();
                }
            })

    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <div className='sidebarandlist'>
                    <div className='sidevar' >
                        <div><EventAndVolunterSidevar /></div>
                    </div>
                    <div>
                        <div className='addEvent-Tittle'>
                            <h3>Add Event</h3>
                        </div>
                        <form onSubmit={handelAddEventFrom}>
                            <div className='addevent-side'>

                                <div className='eventfrom-container'>

                                    <div className="div eventInput">
                                        <div class="row">
                                            <div class="col">
                                                <h4>Event Title</h4>
                                                <input type="text" class="form-control" placeholder="Event Title" aria-label="First name" ref={eventTitleRef} required />
                                            </div>
                                            <div class="col">
                                                <h4>Event date</h4>
                                                <input type="date" class="form-control" placeholder="Last name" aria-label="Last name" ref={eventDateRef} required />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h4>Description</h4>
                                                <div class="form-floating">
                                                    <textarea rows="5" cols="50" class="form-control description-box"
                                                        ref={eventDescriptionRef} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 130 }} required />
                                                    <label for="floatingTextarea2">Description</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <h4>Banner</h4>
                                                <button className='uploadbtn' >
                                                    <div className='bannerbtn-container'>
                                                        <div >
                                                            <div>
                                                                <img src="https://i.ibb.co/hDHkzjT/cloud-upload-outline-1.png" alt="" />

                                                            </div>
                                                        </div>
                                                        <div className='upload-text'>
                                                            upload image
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <input type="link" ref={eventBannerLinkRef} required />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                                <div><button type="submit" className='event-submitbtn'>Submit</button></div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AddEvent;