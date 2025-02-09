import { useState } from "react";
import Dropdown from "../Drowndown";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex justify-between px-24 py-4 items-center bg-slate-800 text-white">
      <div className="font-semibold text-lg">Note Keep</div>
      <div className="flex gap-4 items-center">
        <div className="">Hello User!</div>
        <div className="relative">
          <button
            onClick={() => {
              setShowDropdown(true);
            }}
          >
            <img src="images/avatar.svg" width={36} height={36} alt="profile" />
          </button>
          {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
        </div>
      </div>
    </div>
  );
}
