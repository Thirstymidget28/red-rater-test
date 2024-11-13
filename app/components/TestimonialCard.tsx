import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
    return (
        <div className="mb-10">
            <div className="testimonial-content w-2/3 mx-auto bg-red-600">
            <div className="bg-black text-white px-10 pt-5">
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold">User Name</h3>
                <span className="text-2xl self-center">01/01/2024</span>
              </div>
              <div className="flex justify-between">
                <h4 className="text-2xl self-center">CS 1234</h4>
                <div className="w-32 flex justify-between">
                  <button>
                  <Image 
                    src="/like.svg"
                    alt="Like symbol"
                    width={40}
                    height={40}
                    style={{ filter: 'invert(1) brightness(100)' }}
                  />
                  </button>
                  <button>
                    <Image 
                      src="/dislike.svg"
                      alt="Dislike symbol"
                      width={40}
                      height={40}
                      style={{ filter: 'invert(1) brightness(100)' }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-white text-3xl text-center mx-auto w-11/12 py-10">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
            <div className="flex justify-evenly pb-8">
              <div className="self-center">
                <p className="text-center text-2xl font-bold my-auto py-4">Professor Rating</p>
                <div 
                  className="radial-progress bg-black text-red-600 border-4 border-white" 
                  style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" } as React.CSSProperties} 
                  role="progressbar">
                    <span className="text-white text-xl">70%</span>
                </div>
              </div>

              <div className="self-center">
                <p className="text-center text-2xl font-bold my-auto py-4">Course Rating</p>
                <div 
                  className="radial-progress bg-black text-red-600 border-4 border-white" 
                  style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" } as React.CSSProperties} 
                  role="progressbar">
                    <span className="text-white text-xl">70%</span>
                </div>
              </div>

              <div>
                <p className="text-center text-2xl font-bold my-auto py-4">Professor Tags</p>
                {/* Example descriptors, should be passed as an array function instead. */}
                <div className="grid grid-cols-2 gap-4 my-4">
                  <div className="descriptor text-center bg-slate-300 rounded-sm p-2">
                    <span>Professor Descriptor...</span>
                  </div>
                  <div className="descriptor text-center bg-slate-300 rounded-sm p-2">
                    <span>Professor Descriptor...</span>
                  </div>
                  <div className="descriptor text-center bg-slate-300 rounded-sm p-2">
                    <span>Professor Descriptor...</span>
                  </div>
                  <div className="descriptor text-center bg-slate-300 rounded-sm p-2">
                    <span>Professor Descriptor...</span>
                  </div>
                </div>
              </div>
            </div>

            <Image 
              src="/TTU_Horizontal_Lineart_white.png"
              alt="TTU line art decal."
              width={1000}
              height={100}
              style={{ width:"100%", height:"100%"}}
            />
          </div>
        </div>
    )
}

export default TestimonialCard;