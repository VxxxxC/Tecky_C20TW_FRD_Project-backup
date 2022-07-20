import React, { Suspense, SyntheticEvent, useState } from 'react';
import { Menu, Tabs } from 'react-daisyui';
import useFetch from "react-fetch-hook";
import useWindowDimensions from '../../hook/useWindowDimensions';
import UniLoader from '../elements/loader';
import UserProfileComponent from '../elements/UserProfileComponent';
import UserProfileComponentTest from '../elements/UserProfileComponent_test';
import "./main.scss"

let items = [{
  bg: "string",
  icon: "string",
  name : "string",
  username: "string",
  bio: "string"
}, {
  bg: "string",
  icon: "string",
  name : "string",
  username: "string",
  bio: "string"
}]

function Explore(){
    const { height, width } = useWindowDimensions();
    const [filter, setFilter] = useState(1);
    const [filter2, setFilter2] = useState(0);
    const [MobileMenu, setMobileMenu] = useState(false);
    const [filterTest, setfilterTest] = useState([]);

    // {Object.keys(items).map(item => ({
    //   return()
    // }))}
    const listItems = items.map((item) => 
    <UserProfileComponentTest bg={item.bg} icon={item.icon} name={item.name} username={item.username} bio={item.bio}/>
    )

        // const listItemsLazy = React.lazy(() :any => import ("../elements/UserProfileComponent_test"));



    const UsertProfile = React.lazy(() :any => 
    {  return new Promise(resolve => {
      setTimeout(() => resolve(import("../elements/UserProfileComponent")), 500);
      clearTimeout();
    })});
    // const UsertProfile = React.lazy(() :any => 
    // import("../elements/UserProfileComponent"));


    return width > 600 ? (
        // Desktop Version //
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex mx-7 py-3">
          <Tabs
            value={filter}
            className="cursor-default border-b-[1px] border-[#b0b0b0] w-full h-[3rem] font-mono font-medium shadow-xl"
          >
            <Tabs.Tab
              className={`${filter == 1 ? "tab-active " : ""} tab text-lg`}
              value={() => {
                setFilter(1);
              }}
            >
              Peices
            </Tabs.Tab>
            <Tabs.Tab
              className={`${filter == 2 ? "tab-active" : ""} tab text-lg`}
              value={() => {
                setFilter(2);
              }}
            >
              Collection
            </Tabs.Tab>
            <Tabs.Tab
              className={`${filter == 3 ? "tab-active" : ""} tab text-lg`}
              value={() => {
                setFilter(3);
              }}
            >
              Profiles
            </Tabs.Tab>
          </Tabs>
        </div>
        <div className="grid grid-col-7 gap-4 px-5">
          <div className="p-3 col-start-1 col-end-2 max-w-[20rem]">
            {/* *************** filter *********************** */}
            <ul className="mb-5 menu bg-base-100 w-full rounded-md shadow-xl">
              <span className="p-3 text-md text-content-secondary font-mono font-medium">
                Type
              </span>
              <li
                className={`${filter2 == 1 ? "border-b-2 bg-base-300" : ""}`}
                onClick={() => {
                  setFilter2(1);
                }}
              >
                <a>Creator</a>
              </li>
              <li
                className={`${filter2 == 2 ? "border-b-2 bg-base-300" : ""}`}
                onClick={() => {
                  setFilter2(2);
                }}
              >
                <a>Collector</a>
              </li>
              <li
                className={`${filter2 == 3 ? "border-b-2 bg-base-300" : ""}`}
                onClick={() => {
                  setFilter2(3);
                }}
              >
                <a>Other</a>
              </li>
            </ul>
            <ul className="mb-5 menu bg-base-100 w-full rounded-md shadow-xl">
              <span className="p-3 text-md text-content-secondary font-mono font-medium">
                Social Verification
              </span>
              <li
                className={`${filter2 == 1 ? "border-b-2 bg-base-300" : ""}`}
                onClick={() => {
                  setFilter2(1);
                }}
              >
                <a>Twitter</a>
              </li>
              <li
                className={`${filter2 == 2 ? "border-b-2 bg-base-300" : ""}`}
                onClick={() => {
                  setFilter2(2);
                }}
              >
                <a>Instagram</a>
              </li>
              <li
                className={`${filter2 == 3 ? "border-b-2 bg-base-300" : ""}`}
                onClick={() => {
                  setFilter2(3);
                }}
              >
                <a>Not Verified</a>
              </li>
            </ul>
            {/* *************** UserProfile *********************** */}
          </div>
          <div className="col-start-2 col-end-8">
            <div className="grid grid-cols-3 gap-x-4 p-2">
              <Suspense
                fallback={
                  <div className="col-start-1 col-end-4 h-[100vh]">
                    <UniLoader />
                  </div>
                }
              >
                <UsertProfile />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    ) : (
        // Mobile Version //
      <div>
        <div className="flex py-3 ">
        {/* Top Tab */}
          <Tabs
            value={filter}
            className="cursor-default border-b-[1px] border-[#b0b0b0] w-full h-[3rem] font-mono font-medium shadow-xl"
          >
            <Tabs.Tab
              className={`${filter == 1 ? "tab-active " : ""} tab text-lg`}
              value={() => {
                setFilter(1);
              }}
            >
              Peices
            </Tabs.Tab>
            <Tabs.Tab
              className={`${filter == 2 ? "tab-active" : ""} tab text-lg`}
              value={() => {
                setFilter(2);
              }}
            >
              Collection
            </Tabs.Tab>
            <Tabs.Tab
              className={`${filter == 3 ? "tab-active" : ""} tab text-lg `}
              value={() => {
                setFilter(3);
              }}
            >
              Profiles
            </Tabs.Tab>
          </Tabs>
        {/* filter button */}
        <button
            onClick={() => {
              setMobileMenu(true);
            }}
            className="
        btn-primary font-mono font-medium fixed rounded-full -translate-x-[50%] left-[50%] bottom-[8vh] w-[9rem] h-[3rem]
        hover:scale-105 transition ease-in-out z-50
        "
          >
            Filters
          </button>
        {/* products brower */}
        </div>
        <div className="min-h-[100vh]">
        <div className="m-5 p-5 flex flex-col">
        <Suspense fallback={<UniLoader />}>
            {/* <UsertProfile /> */}
            {/* {listItems} */}
            <UserProfileComponentTest bg="" icon="" name="" username="" bio=""/>
        </Suspense>
        {listItems}
        </div>
        </div>

        {/* pop-up menu */}

        <div
          className={`${MobileMenu ? "flex scale-up-ver-bottom" : "hidden scale-up-ver-bottom"}
            mobile-menu z-[9999] fixed top-[20vh] left-0 h-[80vh] w-[100vw] bg-base-100 text-primary font-mono font-medium
            items-center justify-center rounded-3xl border-neutral-content border-[1px]
            `}>
        
        <div className="grid grid-cols-1 text-center divide-y divide-[#b0b0b0] divide-dotted w-full p-5">
        <div className="p-4 text-white ">
            <div className="flex justify-between">
            <div className="card-title">Filter</div>
            <button 
                onClick={() => {setMobileMenu(false)}}
                className="btn btn-primary rounded-full">X</button>
        </div>
            </div>
            <div className="p-4 text-white ">
                <span>Type</span>
                <div className="mt-5 flex item-start">
                    <input value={1} type="checkbox" checked={false} className="mx-3 checkbox checkbox-sm rounded-md" /> 
                    <div>Creator</div>
                </div>
                <div className="mt-5 flex item-start">
                    <input value={2} type="checkbox" checked={false} className="mx-3 checkbox checkbox-sm rounded-md" /> 
                    <div>Collector</div>
                </div>
                <div className="mt-5 flex item-start">
                    <input value={3} onClick={(e)=>{console.log(e.currentTarget.value);}} type="checkbox" checked={false} className="mx-3 checkbox checkbox-sm rounded-md" /> 
                    <div>Other</div>
                </div>
            </div>
            <div className="p-4 text-white ">
                <span>Social Verification</span>
                <div className="mt-5 flex item-start">
                    <input type="checkbox" checked={false} className="mx-3 checkbox checkbox-sm rounded-md" /> 
                    <div>Twitter</div>
                </div>
                <div className="mt-5 flex item-start">
                    <input type="checkbox" checked={false} className="mx-3 checkbox checkbox-sm rounded-md" /> 
                    <div>Instagram</div>
                </div>
                <div className="mt-5 flex item-start">
                    <input type="checkbox" checked={false} className="mx-3 checkbox checkbox-sm rounded-md" /> 
                    <div>Not Verified</div>
                </div>
            </div>
            <div>
                <button className="mt-5 btn btn-primary w-[80vw] rounded-lg">Save</button>
            </div>
        </div>






        </div>
      </div>
    );
}

export default Explore;



