import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import {createContext, useContext, useState} from "react";

const DashboardContext =  createContext();

export default function DashboardLayout() {
  // temp
 const user= {name : "Ilyas Hadi"}
const [showSidebar, setShowSidebar] = useState(false);
const [isDarkTheme, setIsDarkTheme] = useState(false)

const toggleDarkTheme = () =>{
  console.log("toggle Dark theme")
};
const toggleSidebar = ()=>{
  setShowSidebar(!showSidebar);
};

const logoutUser = (async () => {
 console.log('user logout')
});


  return (
    <DashboardContext.Provider value={
      {
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser
      }
    }>
      <Wrapper>
        <main className="dashboard">
            <SmallSidebar />
            <BigSidebar/>
            <div>
              <Navbar />
              <div className="dashboard-page">
                <Outlet />
              </div>
            </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext);