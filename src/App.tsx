import './App.css'
import {Nav} from "./components/nav/Nav";
import {Routes, Route} from "react-router-dom";
import {position} from "./helpers/styles";
import {CategoryEl} from "./components/main/CategoryEl";
import {Home} from "./components/main/Home";

function App() {
  return (
      <>
          <div className="flex flex-col items-center min-w-[100vw] min-h-[100vh] bg-[#F2F2F2] text-[#333333] subpixel-antialiased">
              <div className="flex justify-center w-full bg-white px-[15px] md:px-[40px] fixed right-0 left-0">
                  <div className={`w-[600px] md:w-[1200px] ${position.flexCenter} flex-col h-[100px]`}>
                      <Nav/>
                  </div>
              </div>

              <Routes>
                  <Route path="/category/:category" element={<CategoryEl/>}/>
                  <Route path="" element={<Home/>}></Route>
              </Routes>
          </div>
      </>
  )
}

export default App
