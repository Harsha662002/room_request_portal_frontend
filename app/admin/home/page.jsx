import React from 'react'
import Navbar from '@/app/components/Navbar/Navbar';
import FacName from '@/app/components/FacName/FacName';
import ReqBtn from '@/app/components/ReqBtn/ReqBtn';
import PenReq from '@/app/components/PenReq/PenReq';
import Card from '@/app/components/Card/Card';
import Footer from '@/app/components/Footer/Footer';

const data = [
  {
    nameOfTheEvent: "PC Meeting",
    date: new Date(),
    hallBooked: "H01",
    request:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores provident dignissimos eaque quidem consectetur voluptas exercitationem rerum dolorum. Expedita sint beatae itaque reprehenderit eum dolorum in eos sit magni.",
    status: "Pending",
  },
  {
    nameOfTheEvent: "GDSC Workshop",
    date: new Date(),
    hallBooked: "H02",
    request:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores provident dignissimos eaque quidem consectetur voluptas exercitationem rerum dolorum. Expedita sint beatae itaque reprehenderit eum dolorum in eos sit magni.",
    status: "Pending",
  },
  {
    nameOfTheEvent: "CP Workshop",
    date: new Date(),
    hallBooked: "H03",
    request:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores provident dignissimos eaque quidem consectetur voluptas exercitationem rerum dolorum. Expedita sint beatae itaque reprehenderit eum dolorum in eos sit magni.",
    status: "Approved",
  },
];

const Home = () => {
  return (
    <div className='h-full -mb-20'>
      <div className='bg-grey'>
        <Navbar />
      </div>
      <div className='bg-white divide-black'>
        <FacName />
        <hr className='bg-black' />
      </div>
      <div className='bg-white divide-black'>
        <ReqBtn/>
        <hr className='bg-black' />
      </div>
      <div className="bg-white">
        <PenReq/>
      </div>
      <div className=' overflow-y-auto h-72 bg-white'>
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        {/* <hr className='bg-black' /> */}
      </div>
      <footer className='w-full max-w-screen-xl mx-auto block text-sm text-gray-500 justify-center sm:text-center dark:text-gray-400 p-4 md:py-8 -mb-8'>
        Footer
      </footer>
    </div>
  );
}

export default Home;