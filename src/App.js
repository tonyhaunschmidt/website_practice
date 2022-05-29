import React, { useRef } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
//import Offcanvas from 'react-bootstrap/Offcanvas'
//import Button from 'react-bootstrap/Button'

import logo from './assets/logo.png'
import heroOne from './assets/hero_one.webp'
import heroTwo from './assets/hero_two.webp'
import heroThree from './assets/hero_three.webp'

import eventsBg from './assets/events_bg.jpeg'

function App() {

  const welcome = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }



  return (
    <>
      <header>
        <div id='logo_title_container'> {/* add link to home */}
          <img src={logo} alt='wonka_logo' className='logo' />
          <h3><span>WILLY WONKA'S</span><br />CHOCOLATE FACTORY</h3>
        </div>
        <Navbar bg="light" expand="lg">
          <Container>
            {/*<Navbar.Brand href="#home">MENU</Navbar.Brand>   hide at full screen*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <NavDropdown title="Rooms" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Entrance</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tunnels</NavDropdown.Item>
                  <NavDropdown.Item href="#">Chocolate</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fear Tunnel</NavDropdown.Item>
                  <NavDropdown.Item href="#">Inventing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Testing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fizzy Lifting Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Nut Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Wonkavision Studio</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Key Information" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Entrance</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tunnels</NavDropdown.Item>
                  <NavDropdown.Item href="#">Chocolate</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fear Tunnel</NavDropdown.Item>
                  <NavDropdown.Item href="#">Inventing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Testing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fizzy Lifting Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Nut Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Wonkavision Studio</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our Factory" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Entrance</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tunnels</NavDropdown.Item>
                  <NavDropdown.Item href="#">Chocolate</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fear Tunnel</NavDropdown.Item>
                  <NavDropdown.Item href="#">Inventing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Testing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fizzy Lifting Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Nut Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Wonkavision Studio</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Chocolates" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Entrance</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tunnels</NavDropdown.Item>
                  <NavDropdown.Item href="#">Chocolate</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fear Tunnel</NavDropdown.Item>
                  <NavDropdown.Item href="#">Inventing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Testing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fizzy Lifting Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Nut Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Wonkavision Studio</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Virtual Office" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Entrance</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tunnels</NavDropdown.Item>
                  <NavDropdown.Item href="#">Chocolate</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fear Tunnel</NavDropdown.Item>
                  <NavDropdown.Item href="#">Inventing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Testing Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fizzy Lifting Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Nut Room</NavDropdown.Item>
                  <NavDropdown.Item href="#">Wonkavision Studio</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section id='hero'>
        <div className='underline_container'>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
        </div>
        <Carousel fade indicators={false} controls={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={heroOne} alt="First slide" />
            <Carousel.Caption>
              <h2>A LITTLE <span>NONSENSE</span> NOW AND THEN IS RELISHED BY THE <span>WISEST</span> MEN</h2>
              <h4>EXPLORE</h4>
              <h4 onClick={() => scrollToSection(welcome)}><span className="material-symbols-outlined">keyboard_double_arrow_down</span></h4> {/*link to move down and jump on hover*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={heroTwo} alt="Second slide" />
            <Carousel.Caption>
              <h2>A LITTLE <span>NONSENSE</span> NOW AND THEN IS RELISHED BY THE <span>WISEST</span> MEN</h2>
              <h4>EXPLORE</h4>
              <h4 onClick={() => scrollToSection(welcome)}><span className="material-symbols-outlined">keyboard_double_arrow_down</span></h4> {/*link to move down and jump on hover*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={heroThree} alt="Third slide" />
            <Carousel.Caption>
              <h2>A LITTLE <span>NONSENSE</span> NOW AND THEN IS RELISHED BY THE <span>WISEST</span> MEN</h2>
              <h4>EXPLORE</h4>
              <h4 onClick={() => scrollToSection(welcome)}><span className="material-symbols-outlined">keyboard_double_arrow_down</span></h4> {/*link to move down and jump on hover*/}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='underline_container'>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
        </div>
      </section>
      <section id='welcome' ref={welcome}>
        {/*<img />*/}
        <h1><span id='welcome_to'>WELCOME TO</span><br />Willy Wonka's Cholocolate Factory</h1>
        <div className='underline_container'><div className='colour_one'></div><div className='colour_two'></div></div>
        <p>Wonka is reopening the factory to the public and has invited five lucky children to come on a tour after they find five Golden Tickets in five Wonka Bars.
          It appears as a chocolate factory, with "Wonka" written everywhere. It has red double doors, yellow walls and a brown space wherever "Wonka" is written.
          The double doors lead into a hexagon entrance, which go downstairs into the room leading up to the lobby entrance. Hats, coats, ect. are hung on golden
          hand-shaped coat hangers. When some of the children and parents hang their coats up they are in for a shock when the golden hands grab tightly onto coats
          and hats, Wonka quoted the previously seen quote. The children then need to sign a curtain-guarded giant contract before going on.
        </p>
        <p>Wonka's favorite room, and debatably the most important in the factory. The room is a grassy meadow full of flowers and trees, with a chocolate river mixed
          by waterfall that pipes into all the other rooms in the factory. Everything in the meadow is edible, and a boat ride down the chocolate river allows transit
          to other rooms in the factory via a dark tunnel.</p>
        <p>The river leads directly between the Chocolate Room and edible marshmallow pillows and the fudge room.</p>
      </section>
      <div className='underline_container'>
        <div className='colour_one_box'></div>
        <div className='colour_two_box'></div>
        <div className='colour_one_box'></div>
        <div className='colour_two_box'></div>
      </div>
      <section id='events'>

        <img src={eventsBg} alt='Chocolate Room' id='events_bg' />
        <div className='slogan_container'>
          <h1 className='slogan_top'>A little <span>NONSENSE</span><br /> now and then</h1>
          <div className='underline_container'>
            <div className='colour_one_box'></div>
            <div className='colour_two_box'></div>
          </div>
          <h1 className='slogan_bottom'>is relished by the<br /><span>WISEST</span> men</h1>
        </div>

        <div className='events_container'>
          <div className='subheader_container'>
            <h1>FACTORY <span>EVENTS</span></h1>
          </div>
          <div className='event_container'>
            <div className='date_container'>
              <h1>5</h1>
              <p>June</p>
            </div>
            <div className='event_title_container'>
              <p>Golden Ticket Release Date</p>
              <div className='underline_container'>
                <div className='colour_one_box'></div>
                <div className='colour_two_box'></div>
              </div>
            </div>
          </div>
          <div className='event_container'>
            <div className='date_container'>
              <h1>8</h1>
              <p>Aug</p>
            </div>
            <div className='event_title_container'>
              <p>2022 Tour</p>
              <div className='underline_container'>
                <div className='colour_one_box'></div>
                <div className='colour_two_box'></div>
              </div>
            </div>
          </div>
          <div className='subheader_container'>
            <div>
              <p>VIEW ALL EVENTS</p>
              <div className='underline_container'>
                <div className='colour_two_box'></div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id='social'>
        <div className='subheader_container'>
          <h1>WONKA'S <span>TWITTER</span></h1>
          <div>
            <p>SEE OUT LATEST TWEETS</p>
            <div className='underline_container'>
              <div className='colour_two_box'></div>
            </div>
          </div>
        </div>
      </section>
      <section id='gallery'>
        <div className='subheader_container'>
          <h1>WONKA'S <span>GALLERY</span></h1>
          <div>
            <p>VIEW ALL GALLERIES</p>
            <div className='underline_container'>
              <div className='colour_two_box'></div>
            </div>
          </div>
        </div>
      </section>
      <section id='map'></section>
      <section id='accreditations'></section>
      <section id='contact'>
        <div id='find_us' className='contact_info'>
          <div className='title_container'>
            <h2>FIND US</h2>
            <div className='underline_container'>
              <div className='colour_two_box'></div>
            </div>
          </div>
          <div className='address_image_container'>
            <p><span className='highlight_text'>Willy Wonka's Chocolate Factory</span></p>
            <address>
              1445 Norwood Ave, <br />
              Itasca, <br />
              IL 60143
            </address>
            <img src={logo} alt='wonka_logo' className='logo' />
          </div>
        </div>
        <div id='contact_us' className='contact_info'>
          <div className='title_container'>
            <h2>CONTACT US</h2>
            <div className='underline_container'>
              <div className='colour_two_box'></div>
            </div>
          </div>
          <p>Gurdeep Roy <span className='highlight_text'>|</span> Head Oompa Loompa</p>
          <address>
            <a href='tel:07852880898'><span className='highlight_text'>07852 880 898</span></a><br />
            <a href='mailto:tonyhaunschmidt@gmail.com'>admin@chocofactory.com</a>
          </address>
          <p>The Inventing Room <span className='highlight_text'>|</span></p>
          <address>
            <a href='tel:07852880898'><span className='highlight_text'>07852 880 898</span></a><br />
            <a href='mailto:tonyhaunschmidt@gmail.com'>admin@chocofactory.com</a>
          </address>
        </div>
        <div id='partnership' className='contact_info'>
          <div className='title_container'>
            <h2>PARTNERSHIP</h2>
            <div className='underline_container'>
              <div className='colour_two_box'></div>
            </div>
          </div>
          <p>Willy Wonka's Chocolate Factory is proud to be part of the British Chocolate Association.</p>
          {/*<img />*/}
        </div>
      </section>
      <footer>
        <p><small>&copy; Willy Wonka's Chocolate Factory. All Rights Reserved. Website by <a href='https://www.tonyhaunschmidt.com/'>Tony Haunschmidt</a>.</small></p>
        <ul>
          <a href="#"><li><small>Website Policy</small></li></a>
          <a href="#"><li><small>Cookies Policy</small></li></a>
          <a href="#"><li><small>Login</small></li></a> {/*hide and have another section above that is unhid */}
          <a href="#"><li><span class="material-symbols-outlined">lock</span></li></a>
        </ul>
      </footer>
    </>

  );
}

export default App;
