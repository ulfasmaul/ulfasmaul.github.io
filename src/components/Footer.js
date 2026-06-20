import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <div className="text-lg text-center relative isolate px-6 py-24 lg:px-8">

    <button
      className="btn btn-circle btn-outline"
      onClick={() => scroll.scrollToTop()}
    >
      <FaArrowUp />
    </button>

      <div className="mt-10 flex items-center justify-center gap-x-4">
      </div>
            <p>Copyright © 2023 React Portfolio. All Rights Reserved</p>
    </div>
  );
}
