import './App.css'
import {Nav} from "./components/nav/Nav";
import {Routes, Route} from "react-router-dom";
import {position} from "./helpers/styles";
import {CategoryEl} from "./components/home/CategoryEl";
import {Home} from "./components/home/Home";

function App() {
  return (
      <>
          <div className="flex flex-col items-center min-w-[100vw] min-h-[100vh] bg-[#F2F2F2] text-[#333333] subpixel-antialiased">
              <div className="flex justify-center w-full px-[15px] md:px-[40px]">
                  <div className={`${position.flexCenter} fixed right-0 left-0 bg-white flex-col h-[100px] px-[15px] md:px-[40px] z-10`}>
                      <Nav/>
                  </div>
                  <Routes>
                      <Route path="/category/:category" element={<CategoryEl/>}/>
                      <Route path="" element={<Home/>}></Route>
                  </Routes>
              </div>
          </div>
      </>
  )
}

export default App
