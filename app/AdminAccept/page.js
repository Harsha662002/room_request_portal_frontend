import React from "react";

const AdminAccept = () => {
  return (
    <div class="main">
      <nav class="navbar flex justify-between items-center py-3 px-4" style="background-color: #80808080;">
        <div class="flex items-center">
          <div class="college-logo w-20 h-20 border-2 border-black rounded-full mr-2"></div>
          <span>College Name</span>
        </div>
        <div><a href="#">Logout</a></div>
      </nav>
      <div class="container px-4">
        <div class="faculity-name">
          <h3 class="my-2 text-lg">(Faculity Name)</h3>
        </div>
        <div class="line-separator w-full h-px bg-black"></div>
        <div>
          <h2 class="my-2 mt-3 text-xl font-semibold">Approved Requests</h2>
          <div class="cards">
            <div class="card flex items-center p-3 flex-col md:flex-row" style="background-color: #80808080;">
              <div class="w-full md:w-3/5">
                <p>Name of the Event: <span class="event-name">XXXXXXXX</span></p>
                <p>Date of the Event: <span class="event-date">DD/MM/YYYY</span></p>
                <p>Hall: <span class="event-hall">XXX</span></p>
                <p>Request: <span class="event-request">Lorem ipsum dolor sit amet consectetur adipisicing
                  elepudiandae iusto a sint, odit blanditiis amet.</span></p>
              </div>
              <div class="w-full md:w-3/5 mt-2">
                <div class="club-details p-1 px-5 pl-6 border-black border-2 rounded-full">
                  <p>Club Name: <span class="club-name">XXX</span></p>
                  <p>PIC: <span class="pic">YYY</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminAccept;
