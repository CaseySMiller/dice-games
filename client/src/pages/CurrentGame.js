import React, { useState } from 'react';
import { 
        MDBContainer,
        MDBRow, 
        MDBCol,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBBtn,
        MDBModal,
        MDBModalDialog,
        MDBModalContent,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
    } from 'mdb-react-ui-kit';

const CurrentGame = () => {

    const [varyingPlayer, setVaryingPlayer] = useState('');
    const [varyingModal, setVaryingModal] = useState(false);
    const [varyingScores, setVaryingScores] = useState('');
    const [varyingMessage, setVaryingMessage] = useState('');



    return (
        <>
            <MDBContainer className='p-2'>
                <MDBRow className='d-flex justify-content-center'>
                    Current Game
                </MDBRow>

                <MDBRow className='d-flex justify-content-center'>
                    <MDBCol md={9} lg={6}>
                        <div className='shadow p-0 m-0'>
                            <MDBCard className='mb-3 mx-100 hover-shadow'>
                                <MDBCardBody>
                                    <MDBCardTitle className="text-center">
                                        Farkle Game #1
                                        <br/>
                                        Started: 10/11/02 11:38pm
                                    </MDBCardTitle>
                                    <MDBCardText >
                                        <MDBContainer>
                                            <MDBRow className='border-top d-flex align-items-spread'>
                                                <MDBCol size='7' className='fs-5 d-flex align-items-center'>
                                                    Casey Scott Miller
                                                </MDBCol>
                                                <MDBCol size ='3' className='fs-5 d-flex align-items-center justify-content-end'>
                                                    1600
                                                </MDBCol>
                                                <MDBCol size='2' className='d-flex justify-content-end p-0'>
                                                        <MDBBtn 
                                                        className='height=100% fs-3 center-all'
                                                        onClick={() => {
                                                            setVaryingPlayer('Casey Scott Miller');
                                                            setVaryingModal(!varyingModal);
                                                            setVaryingScores([100, 100, 100]);
                                                        }}
                                                        >
                                                            +
                                                        </MDBBtn>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className='border-top d-flex align-items-spread'>
                                                <MDBCol size='7' className='fs-5 d-flex align-items-center'>
                                                    Reno M.
                                                </MDBCol>
                                                <MDBCol size ='3' className='fs-5 d-flex align-items-center justify-content-end'>
                                                    1600
                                                </MDBCol>
                                                <MDBCol size='2' className='d-flex justify-content-end p-0'>
                                                        <MDBBtn
                                                        className='height=100% fs-3 center-all'
                                                        onClick={() => {
                                                            setVaryingPlayer('Reno M.');
                                                            setVaryingModal(!varyingModal);
                                                            setVaryingScores([200, 100, 100]);
                                                        }}
                                                        >
                                                            +
                                                        </MDBBtn>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className='border-top d-flex align-items-spread'>
                                                <MDBCol size='7' className='fs-5 d-flex align-items-center'>
                                                    Cody Miller
                                                </MDBCol>
                                                <MDBCol size ='3' className='fs-5 d-flex align-items-center justify-content-end'>
                                                    1600
                                                </MDBCol>
                                                <MDBCol size='2' className='d-flex justify-content-end p-0'>
                                                        <MDBBtn
                                                        className='height=100% fs-3 center-all'
                                                        onClick={() => {
                                                            setVaryingPlayer('Cody Miller');
                                                            setVaryingModal(!varyingModal);
                                                            setVaryingScores([300, 100, 100]);
                                                        }}
                                                        >
                                                            +
                                                        </MDBBtn>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBContainer>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            {/* begin modal */}

            <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
                <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>{varyingPlayer}</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(!varyingModal)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow className='border-top'>
                        {varyingScores[0]}
                        </MDBRow>
                        <MDBRow className='border-top'>
                        {varyingScores[1]}
                        </MDBRow>
                        <MDBRow className='border-top'>
                        {varyingScores[2]}
                        </MDBRow>
                        <MDBRow className='border-top'>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        {`Total Score ${varyingScores[0]+varyingScores[1]+varyingScores[2]}`}
                        <MDBBtn color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                            Close
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

        </>
    );
};

export default CurrentGame;



// old code
