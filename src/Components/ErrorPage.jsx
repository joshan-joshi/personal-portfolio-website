import React from 'react';

const ErrorPage = ({ statusCode, message }) => {
  document.title = "Joshan Services | Full Stack Web Developer | Error Page"
  return (
    <div className='h-[100vh] w-full flex items-center justify-center gap-4'>
      <h1 className='animate__animated animate__fadeInLeft'>Error {statusCode}</h1>
      <p className='animate__animated animate__fadeInUp'>||</p>
      <p className='animate__animated animate__fadeInRight'>{message}</p>
    </div>
  );
};

export default ErrorPage;