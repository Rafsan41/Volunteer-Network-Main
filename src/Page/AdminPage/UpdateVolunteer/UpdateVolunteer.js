import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateVolunteer.css'
const UpdateVolunteer = () => {
    const [volunterUser, setVolunteerUser] = useState({});
    const { id } = useParams()
    useEffect(() => {
        const url = `https://volunter-network-server.onrender.com/register/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVolunteerUser(data))
    }, [])

    const handelVolunterUserUpdate = e => {
        e.preventDefault()
        const url = `https://volunter-network-server.onrender.com/register/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(volunterUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount
                ) {
                    alert('Updated user Successfully');
                    setVolunteerUser({});
                }
            })

    }
    const handelVolunterNameChange = e => {
        const updatedName = e.target.value
        const updatedUser = { name: updatedName, email: volunterUser.email }
        setVolunteerUser(updatedUser);
        console.log(e.target.value);
    }
    const handelVolunterEmailChange = e => {
        const updateEmail = e.target.value
        const updatedUser = { name: volunterUser.name, email: updateEmail }
        setVolunteerUser(updatedUser);
        console.log(e.target.value);
    }

    return (
        <div>
            <h3> Update Volunter USER </h3>
            <h2>update: {volunterUser.name} ::  {volunterUser.email}</h2>
            <p>{id}</p>
            <form onSubmit={handelVolunterUserUpdate}>
                <input type="name" onChange={handelVolunterNameChange} value={volunterUser.name || ''} />
                <input type="email" onChange={handelVolunterEmailChange} value={volunterUser.email || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateVolunteer;