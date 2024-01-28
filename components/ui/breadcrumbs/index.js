import Link from "next/link";
import "./breadcrumbs.css";
import { FaHome } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const BreadCrumbs = () => {
  return (
    <div className="breadCrumbs my-[50px] py-[10px]">
      <div className="bread_home">
        <Link href="/">
          <FaHome className="icon_home text-[30px] text-white" />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="">Application</Link>
          <MdChevronRight className="icon_left absolute right-[-17px]" />
        </li>
        <li>
          <Link href="">Schedule</Link>
          <MdChevronRight className="icon_left absolute right-[-17px]" />
        </li>
        <li>
          <Link href="/">Location</Link>
          <MdChevronRight className="icon_left absolute right-[-17px]" />
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
