import React, { useState } from 'react';
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
                                <MDBDropdownItem link>New Farkle Game</MDBDropdownItem>
                                <MDBDropdownItem disabled link>New Yahtzee Game</MDBDropdownItem>
                                <MDBDropdownItem disabled link>Join a Game</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link'>
                                User Name
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>View past games</MDBDropdownItem>
                                <MDBDropdownItem link>Update User Profile</MDBDropdownItem>
                                <MDBDropdownItem link>Log Out</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                </MDBNavbarNav>

            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}