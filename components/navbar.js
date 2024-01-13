
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed p-6 w-full justify-between text-l font-semibold mx-auto border-none flex items-center space-x-4 z-10 text-white">
      <div className="w-1/5">
        <ul className="list-none pl-10 pr-10 pt-5 flex justify-around items-center text-['lkaros_sans']">
          <a href="#" className="text-['LEMON_MILK'] text-3xl">
            +1
          </a>
          <Link href="/index" className="hover:text-[#FF5349]">
            Participant
          </Link>
        </ul>
      </div>

      <div className="w-1/2">
        <ul className="list-none flex items-center justify-around text-['lkaros_sans']">
          <Link href="/home" className="hover:text-[#FF5349]">ASH
          </Link>
          <Link href="/tools" className="hover:text-[#FF5349]">TOOLS
          </Link>
          <Link href="/about" className="hover:text-[#FF5349]">ABOUT
          </Link>
          <Link href="#">
            <img src={"/"} className="w-12 h-12" alt="threeDotIcon" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
