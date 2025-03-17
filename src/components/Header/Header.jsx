import reactLogo from "../Header/test.svg";



export default function Header() {
  return (
    <div>
      Header
      <img src={reactLogo} className="logo react" alt="React logo" />
      <nav>
        <ul>
          <li>
            <a href="/HomePage">HomePage</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
