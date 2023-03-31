import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './RegisterFrom.css';
const RegisterFrom = () => {


    const nameRef = useRef();
    const emailRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const volunteerServiceTypeRef = useRef();
    const hadelRegistationFrom = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const date = dateRef.current.value;
        const description = descriptionRef.current.value;
        const volunteerServiceType = volunteerServiceTypeRef.current.value;

        const newUser = { name, email, date, description, volunteerServiceType }
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
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

        <div className='registerfrom-container'>

            <form onSubmit={hadelRegistationFrom}>
                <div className='registerFrom'>
                    <h3>Register As a Volunteer</h3>
                    <div><input type="name" placeholder='Full Name' ref={nameRef} required /></div>
                    <div>  <input type="name" placeholder='User name or email' ref={emailRef} required /></div>
                    <div><input type="date" ref={dateRef} required /></div>
                    <div><input type="text area" placeholder='Discription' ref={descriptionRef} required /></div>
                    <div> <input type="text " placeholder='Organize Books and laibrary..' ref={volunteerServiceTypeRef} required /></div>
                    <div><button className='registationbtn bg-primary' type="submit">Registation</button></div>
                    <div>

                        <p>Already Have An Account?<Link className='link ' to='/logIn'>Log In</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterFrom;