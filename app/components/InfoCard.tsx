import React from 'react';
import Image from "next/image";
import LineGraph from './LineGraph';

const InfoCard = () => {
    return (
        <div className="pt-10 pb-5 w-3/4">
          <h1 className="text-6xl font-bold">Professor Name</h1>
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-red-700 my-auto">Professor College</h2>
                <select className="select select-bordered max-w-xs font-bold" defaultValue="Course List">
                  <option disabled>Course List</option>
                  <option>Example 1</option>
                  <option>Example 2</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                {/* Example descriptors, should be passed as an array function instead. */}
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
              <div className="w-full h-full">
                <LineGraph />
              </div>
              
            </div>
            <div className="data-board flex flex-col w-1/2">
              <h3 className="text-center text-2xl font-bold my-auto">Overall Rating</h3>
              <div className="self-center">
                <div 
                  className="radial-progress bg-white text-red-600 border-4 border-black" 
                  style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" } as React.CSSProperties} 
                  role="progressbar">
                    <span className="text-black text-xl">70%</span>
                </div>
              </div>
              <Image 
                  src="/bubble_example.png"
                  alt="example bubbles"
                  width={1000}
                  height={100}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
          </div>
        </div>
    )
}

export default InfoCard;