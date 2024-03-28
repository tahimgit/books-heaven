// import { Outlet } from "react-router-dom";
import ReadBooks from "./ReadBooks";



export default function LIstedBook() {
  return (
    <div className="">
      <div className=" max-w-[90%] m-auto flex justify-center">
        <details >
          <summary className="bg-green-600 text-white w-28 p-4 font-bold">Sort By</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </div>
      <div >
        <h1 className='text-[40px] max-w-[90%] m-auto rounded-xl p-8 bg-[#1313130D] border font-bold text-center mt-4 mb-8'>Books</h1>
      </div>
      {/* <Outlet></Outlet> */}
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <ReadBooks />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
      </div>
      {/* <ReadBooks></ReadBooks> */}

    </div>
  )
}
