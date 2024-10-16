import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="p-9 top-0 left-0 h-full text-white transition-transform duration-300 ease-in-out bg-slate-950">
      <ul className="space-y-4">
        <Link to='/homepage'>
        <li>Home</li>
        </Link>
        <li>Follows</li>
        <li>Updates</li>
        <li>Reading History</li>
        <li>Titles</li>
        <li>Community</li>
        <li>MangaDex</li>
      </ul>
    </div>
  );
}
export default SideBar;
