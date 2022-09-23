import { Link } from 'react-scroll';

export function Header() {
  return (
    <header>
      <nav>
        <a href="./">
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="#28A745"
            stroke="#28A745"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.0025 0.690915C33.2628 0.903512 25.8298 1.67734 21.2412 4.49101C20.9245 4.68515 20.745 5.03037 20.745 5.39131V30.2652C20.745 31.0548 21.6069 31.5538 22.3337 31.1874C27.0547 28.8071 33.8824 28.1577 37.2584 27.98C38.411 27.9191 39.307 26.9936 39.307 25.8841V2.78955C39.3077 1.5789 38.2595 0.619821 37.0025 0.690915ZM18.0658 4.49101C13.4779 1.67734 6.04492 0.904196 2.30523 0.690915C1.04821 0.619821 0 1.5789 0 2.78955V25.8848C0 26.9949 0.896024 27.9205 2.04864 27.9807C5.42596 28.1584 12.257 28.8085 16.9781 31.1901C17.7028 31.5559 18.562 31.0575 18.562 30.27V5.379C18.562 5.01738 18.3832 4.68584 18.0658 4.49101Z"
              fill="#28A745"
            />
          </svg>
          <span>Finance</span>Ledger
        </a>
        <ul>
          <li>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="cases"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Cases
            </Link>
          </li>
          <li>
            <Link to="blog" spy={true} smooth={true} offset={50} duration={500}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
