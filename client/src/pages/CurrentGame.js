import React from 'react';
import { 
        MDBContainer,
        MDBRow, 
        MDBCol,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBTable, 
        MDBTableHead, 
        MDBTableBody,
        MDBBtn
    } from 'mdb-react-ui-kit';

const CurrentGame = () => {

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
                                                        <MDBBtn className='height=100% fs-3 center-all'>
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
                                                        <MDBBtn className='height=100% fs-3 center-all'>
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
                                                        <MDBBtn className='height=100% fs-3 center-all'>
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
        </>
    );
};

export default CurrentGame;



// old code

{/* <MDBTable small responsive align='middle'>
<MDBTableHead light>
    <tr>
        <th>
            Casey M.
        </th>
        <th>
            Reno M.
        </th>
        <th>
            Cody M.
        </th>
        <th>
            April M.
        </th>
        <th>
            Dennis M.
        </th>
    </tr>
</MDBTableHead>
<MDBTableBody>
    <tr>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
    </tr>
    <tr>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
    </tr>
    <tr>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
        <td>
            1000
        </td>
    </tr>
    <tr>
        <td>
            500
        </td>
        <td>
            <MDBBtn>
                Add Score
            </MDBBtn>
        </td>
    </tr>
</MDBTableBody>
<tfoot>
    <tr className='table-active'>
        <td>
            <b>3500</b>
        </td>
        <td>
            <b>3000</b>
        </td>
        <td>
            <b>3000</b>
        </td>
        <td>
            <b>3000</b>
        </td>
        <td>
            <b>3000</b>
        </td>
    </tr>
</tfoot>
</MDBTable> */}