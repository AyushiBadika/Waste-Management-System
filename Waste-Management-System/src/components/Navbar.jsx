import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Navbar() {
  return (
    <div className="flex justify-between p-4">
      <h1>E waste</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About us</li>
        <li>
          Recycle <ArrowDropDownIcon />
          <ul>
            <li>E waste</li>
            <li>Other waste</li>
          </ul>
        </li>
        <li>
          Complaint <ArrowDropDownIcon />
          <ul>
            <li>Register</li>
            <li>Track</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
