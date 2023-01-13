import React, { useEffect, useState } from 'react';
import { 
        MDBContainer,
    } from 'mdb-react-ui-kit';
import Auth from '../utils/auth'
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
    
    const { loading, data } = useQuery(QUERY_USER);
    const [userData, setUserData] = useState({});
    //setUserData after data returns from QUERY_USER
    useEffect(() => {
        const user = data?.user || {};
        setUserData(user);
    }, [loading]);

    console.log(data);


    return (
        <>
            <MDBContainer className='p-2'>
                <p>this profile is for {userData.firstName} {userData.lastName}</p>
                <p>your email is {userData.email}</p>
                <p>you rid is {userData.email}</p>
                <p>you have played {userData.farkleGames.length} games of farkle</p>
            </MDBContainer>
        </>
    );
};

export default Profile;
