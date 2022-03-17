import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { StudentContext } from '../contexts/StudentContext';

const Profile = () => {
    const { students } = useContext(StudentContext);
    let{id} = useParams();
    let displayStudent=  students.filter((student)=>student.id == id)[0];
    
    
    return (
        <>
        {console.log(displayStudent)}
      <section className='vh-100' style={{ backgroundColor: '#0066a1' }}>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col col-lg-6 mb-4 mb-lg-0'>
              <div className='card mb-3'>
                <div className='row g-0'>
                  <div
                    className='col-md-4 graident-custom text-center text-white'
                    style={{
                      borderTopLeftRadius: '0.5rem',
                      borderBottomLeftRadius: '.5rem',
                      background: '#95B9C7',
                      
                    }}
                  >
                    <img
                      src={`https://avatars.dicebear.com/api/male/${displayStudent.id}.svg`}
                      alt='Avatar'
                      className='img-fluid my-5'
                      style={{ width: '90px' }}
                    />
                    <h5>{`${displayStudent.firstName} ${displayStudent.lastName}`}</h5>
                    <p>Web Designer</p>
                    <i className='bi bi-pencil-square mb-5'></i>
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body p-4'>
                      <h6>Information</h6>
                      <hr className='mt-0 mb-4' />
                      <div className='row pt-1'>
                        <div className='col-6 mb-3'>
                          <h6>Email</h6>
                          <p className='text-muted'>{displayStudent.email}</p>
                        </div>
                        <div className='col-6 mb-3'>
                          <h6>Phone</h6>
                          <p className='text-muted'>{displayStudent.mobile}</p>
                        </div>
                        <div className='col-6 mb-3'>
                          <h6>Date of Birth</h6>
                          <p className='text-muted'>{displayStudent.dob}</p>
                        </div>
                        <div className='col-6 mb-3'>
                          <h6>Address</h6>
                          <p className='text-muted'>{displayStudent.address}</p>
                        </div>
                      </div>

                      <div className='d-flex justify-content-start'>
                        <a href='#!'>
                          <i className='bi bi-facebook b me-3'></i>
                        </a>
                        <a href='#!'>
                          <i className='bi bi-twitter me-3'></i>
                        </a>
                        <a href='#!'>
                          <i className='bi bi-instagram fa-lg'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Profile