import React from 'react';

const Social = () => {
    return (
        <div>
       <h1 className='text-center text-3xl font-semibold py-5'>Featured Courses</h1>
     <div className='flex gap-10 flex-col md:flex-row'>
      <div className="relative flex-1 py-16 mb-6 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://i.ibb.co/pyDvcnX/5.jpg"
            alt="img-blur-shadow"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Evening MBA
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
      <div className="relative flex-1  py-16 mb-6 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://i.ibb.co/gT7GQ52/6.jpg"
            alt="img-blur-shadow"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Basic Philosopphy
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Rimply dummy texthe prinetting indus known printer galley scrambled.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Social;
