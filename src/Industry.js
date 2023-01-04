import React from "react";
import Ca1 from "./Image/f1.webp";
import Ca2 from "./Image/f2.webp";
import Ca3 from "./Image/f3.webp";
import Ca4 from "./Image/f4.webp";

export const Industry = () => {
  const Company = [
    {
      name: "GENERAL TRANSPORT",
      img: <Ca1 />,
    },
    {
      name: "IDI SOFTWARE",
      img: <Ca2 />,
    },
    {
      name: "IMOGEN CARS",
      img: <Ca3 />,
    },
    {
      name: "TRI-NEX",
      img: <Ca4 />,
    },
  ];

  return (
    // <section style={{ padding: "50px 0px" }} className="bg-black text-white ">
    //   <div className="container-fliud">
    //     <div className="row">
    //       <div className="industry-text d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-4 p-md-3 p-sm-3 p-5 mt-lg-5 mt-md-5 text-sm-center text-lg-start text-md-center text-center">
    //         <div>
    //           <div className="big-line me-lg-5 me-md-5 me-sm-4 me-4">
    //             <div className="small-line"></div>
    //           </div>
    //         </div>
    //         <div>
    //           <h5 className="mb-4 opacity-75">INDUSTRY</h5>
    //           <h3 className="mb-4">Our Partners</h3>
    //           <h6 className="opacity-75">
    //             Click here to add your own content and customize the text. This
    //             is a great place to tell a story about your company and let your
    //             users know a little more about the company's history, the team's
    //             background, or any other information you'd like to share. Just
    //             click "Edit Text" to get started.
    //           </h6>
    //         </div>
    //       </div>
    //       <div className="company-numbers col-12 col-lg-6 col-md-6 col-sm-12 p-lg-4 p-md-3 p-sm-2 mt-lg-5 mt-md-5 ms-5">
    //         <div className="row d-flex justify-content-center align-items-center w-50 ">
    //           {Company.map((items, index) => {
    //             console.log(items);
    //             return (
    //               <div
    //                 className="col-12 col-lg-6 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-sm-3 mb-3"
    //                 key={index}
    //               >
    //                 <img src={items.img.type} alt="company-img" className="img-fluid" />
    //                 <h5 className="pt-lg-3 pt-3">{items.name}</h5>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      id="vision"
      style={{ padding: "80px 0px", borderColor: "black" }}
      className="bg-black text-white"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="vision-text d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-5 p-md-3 p-sm-3 p-5 mt-lg-5 mt-md-5 text-sm-center text-lg-start text-md-center text-center">
            <div>
              <div className="big-line me-lg-5 me-md-5 me-sm-4 me-4">
                <div className="small-line"></div>
              </div>
            </div>
            <div>
              <h5 className="mb-4 opacity-75">INDUSTRY</h5>
              <h3 className="mb-4">Our Partners</h3>
              <h6 className="opacity-75">
                Click here to add your own content and customize the text. This
                is a great place to tell a story about your company and let your
                users know a little more about the company's history, the team's
                background, or any other information you'd like to share. Just
                click "Edit Text" to get started.
              </h6>
            </div>
          </div>
          <div className="vision-img col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ps-lg-5 ps-md-5 text-sm-start text-center text-lg-start text-md-start">
            <div className="row ">
              {Company.map((items, index) => {
                return (
                  <div
                    className="col-12 col-lg-6 col-md-6 col-sm-6 mb-lg-4 mb-md-4 mb-sm-3 mb-3 d-flex flex-column justify-content-center align-items-center"
                    key={index}
                  >
                    <div className="image h-50 w-50">
                      <img
                        src={items.img.type}
                        alt="company-img"
                        className="img-fluid"
                        
                      />
                    </div>
                    <div className="text">
                      <h5 className="mt-lg-5 mt-md-5 mt-sm-5 mt-5">{items.name}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
