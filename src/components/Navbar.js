import logo from '../logo.svg';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='nav' id='navbar'>
      <div className='nav-content'>
        <img
          src={logo}
          className='nav-logo'
          alt='Logo.'
          onClick={() => animateScroll.scrollToTop()}
        />

        <ul className='nav-items'>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='section2'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='section3'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 3
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='section4'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 4
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='section5'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 5
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
