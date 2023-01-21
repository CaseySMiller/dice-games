import React, { useEffect, useState } from 'react';

import Auth from '../utils/auth'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {

    // console.log(Auth.getProfile().data);

    const loggedIn = Auth.loggedIn();
    const currentUser = loggedIn ? Auth.getProfile().data : {};

    //nav bar state
    const [showNavRight, setShowNavRight] = useState(false);

    return (
        <MDBNavbar expand='md' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand>Dice Games</MDBNavbarBrand>

            <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavRight(!showNavRight)}
            >
                <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showNavRight}>
                <MDBNavbarNav right fullWidth={false} className='ms-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='/currentGame'>
                        Current Game
                    </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link'>
                                Games
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem 
                                link href='/join'>Join a Game</MDBDropdownItem>
                                <MDBDropdownItem 
                                className={loggedIn ? '' : 'no-display'}
                                link href='/newfarkle'
                                >
                                    New Farkle Game
                                </MDBDropdownItem>
                                <MDBDropdownItem disabled link>New Yahtzee Game</MDBDropdownItem>
                                <MDBDropdownItem 
                                className={loggedIn ? '' : 'no-display'}
                                link href='/pastGames'
                                >
                                    Past Games
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link'>
                                {loggedIn ? currentUser.userName : 'Log In'}
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem 
                                link href={loggedIn ? '#' : '/login'}
                                >
                                    {loggedIn ? 'Log Out' : 'Log In/Sign Up'}
                                </MDBDropdownItem>
                                <MDBDropdownItem 
                                link href='/profile'
                                className={loggedIn ? '' : 'no-display'}
                                >
                                    User Profile
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                </MDBNavbarNav>

            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}