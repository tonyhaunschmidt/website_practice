import React, { useRef } from 'react'
import Map, { Marker } from 'react-map-gl'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
//import Offcanvas from 'react-bootstrap/Offcanvas'
//import Button from 'react-bootstrap/Button'

import Slider from "react-slick"

import logo from './assets/logo.png'
import heroOne from './assets/hero_one.webp'
import heroTwo from './assets/hero_two.webp'
import heroThree from './assets/hero_three.webp'
import eventsBg from './assets/events_bg.jpeg'
import tweetOne from './assets/tweet_one.jpeg'
import tweetTwo from './assets/tweet_two.avif'
import tweetThree from './assets/tweet_three.jpeg'
import tweetFour from './assets/tweet_four.jpeg'
import tweetFive from './assets/tweet_five.jpeg'
import tweetSix from './assets/tweet_six.jpeg'
import galleryPic from './assets/gallery.jpeg'
import badgeOne from './assets/badge_one.png'
import badgeTwo from './assets/badge_two.png'
import badgeThree from './assets/badge_three.webp'
import badgeFour from './assets/badge_four.png'
import badgeFive from './assets/badge_five.png'
import badgeSix from './assets/badge_six.png'
import badgeSeven from './assets/badge_seven.png'
import bca from './assets/bca.webp'



function App() {

  const welcome = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 90,
      behavior: 'smooth'
    })
  }

  var sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  }



  return (
    <>
      <header>
        <div className='section_container'>
          <div id='logo_title_container'> {/* add link to home */}
            <img src={logo} alt='wonka_logo' className='logo' />
            <h3><span>WILLY WONKA'S</span><br />CHOCOLATE FACTORY</h3>
          </div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">MENU</Navbar.Brand>
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
                    <div className='underline_container'>
                      <div className='colour_two_box'></div>
                    </div>
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
                    <div className='underline_container'>
                      <div className='colour_two_box'></div>
                    </div>
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
                    <div className='underline_container'>
                      <div className='colour_two_box'></div>
                    </div>
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
                    <div className='underline_container'>
                      <div className='colour_two_box'></div>
                    </div>
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
                    <div className='underline_container'>
                      <div className='colour_two_box'></div>
                    </div>
                  </NavDropdown>
                  <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

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
        <div className='section_container'>
          <img src={logo} alt='welcome' />
          <h1><span id='welcome_to'>WELCOME TO</span><br />Willy Wonka's Cholocolate Factory</h1>
          <div className='underline_container'>
            <div className='colour_one_box'></div>
            <div className='colour_two_box'></div>
          </div>
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
          <p>Despite maintaining the appearance of a standard production facility, the Wonka Chocolate Factory contains an extremely intricate and bizarre layout. It is
            likely that construction went deep underground in order to accommodate Wonka's chocolate river and massive amount of rooms and locations.
          </p>
          <p>The factory features two main methods of navigation: the great glass elevator and a flume along the chocolate river. The elevator is said to be more efficient.</p>
        </div>
      </section>
      <div className='underline_container'>
        <div className='colour_one_box'></div>
        <div className='colour_two_box'></div>
        <div className='colour_one_box'></div>
        <div className='colour_two_box'></div>
      </div>
      <section id='events'>

        <div className='section_container'>
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
            <a href='#'>
              <div className='event_container'>
                <div className='date_container'>
                  <h1>5</h1>
                  <p>June</p>
                </div>
                <div className='event_title_container'>
                  <p>Golden Ticket Release</p>
                  <div className='underline_container_changer'>
                    <div className='colour_one_box_changer'></div>
                  </div>
                </div>
              </div>
            </a>
            <a href='#'>
              <div className='event_container'>
                <div className='date_container'>
                  <h1>8</h1>
                  <p>Aug</p>
                </div>
                <div className='event_title_container'>
                  <p>2022 Tour</p>
                  <div className='underline_container_changer'>
                    <div className='colour_one_box_changer'></div>
                  </div>
                </div>
              </div>
            </a>
            <a href='#'>
              <div className='subheader_container'>
                <div>
                  <p>VIEW ALL EVENTS</p>
                  <div className='underline_container'>
                    <div className='colour_two_box'></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

      </section>
      <section id='social'>
        <div className='section_container'>
          <a href='#'>
            <div className='subheader_container'>
              <h1>WONKA'S <span>TWITTER</span></h1>
              <div>
                <p>SEE OUT LATEST TWEETS</p>
                <div className='underline_container'>
                  <div className='colour_two_box'></div>
                </div>
              </div>
            </div>
          </a>
          <Slider {...sliderSettings}>
            <div>
              <Card className="bg-dark text-white">
                <Card.Img src={tweetOne} alt="Card image" />
                <Card.ImgOverlay>
                  <div className='text_over_image'>
                    <h3>31 May, 2022</h3>
                    <p>Due do a somewhat greedy disposition of a Dusseldorfian, there may be... </p>
                  </div>
                </Card.ImgOverlay>
                <Card.ImgOverlay>
                  <div className='overlay_container'>
                    <div className='tweet_title_container'>
                      <img src={logo} alt='twitter profile pic' />
                      <div className='tweet_info'>
                        <p className='tweet_name'>Wonka's Chocolate</p>
                        <p><a href='#' >@WonkaChoco</a> 31 May, 2022</p>
                      </div>
                    </div>
                    <p>Due do a somewhat greedy disposition of a Dusseldorfian, there may be small traces of human in the next batch of chocolate. Please get in touch if you have any allergic reactions.</p>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div>
              <Card className="bg-dark text-white">
                <Card.Img src={tweetTwo} alt="Card image" />
                <Card.ImgOverlay>
                  <div className='text_over_image'>
                    <h3>31 May, 2022</h3>
                    <p>Exciting new things being cooked up in the inventing room. They're just not..</p>
                  </div>
                </Card.ImgOverlay>
                <Card.ImgOverlay>
                  <div className='overlay_container'>
                    <div className='tweet_title_container'>
                      <img src={logo} alt='twitter profile pic' />
                      <div className='tweet_info'>
                        <p className='tweet_name'>Wonka's Chocolate</p>
                        <p><a href='#' >@WonkaChoco</a> 31 May, 2022</p>
                      </div>
                    </div>
                    <p>Exciting new things being cooked up in the inventing room. They're just not ready quite yet. Unless you want to be a blueberry...</p>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div>
              <Card className="bg-dark text-white">
                <Card.Img src={tweetThree} alt="Card image" />
                <Card.ImgOverlay>
                  <div className='text_over_image'>
                    <h3>25 May, 2022</h3>
                    <p>If You Want To View Paradise, Simply Look Around And View It.</p>
                  </div>
                </Card.ImgOverlay>
                <Card.ImgOverlay>
                  <div className='overlay_container'>
                    <div className='tweet_title_container'>
                      <img src={logo} alt='twitter profile pic' />
                      <div className='tweet_info'>
                        <p className='tweet_name'>Wonka's Chocolate</p>
                        <p><a href='#' >@WonkaChoco</a> 25 May, 2022</p>
                      </div>
                    </div>
                    <p>If You Want To View Paradise, Simply Look Around And View It.</p>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div>
              <Card className="bg-dark text-white">
                <Card.Img src={tweetFour} alt="Card image" />
                <Card.ImgOverlay>
                  <div className='text_over_image'>
                    <h3>22 May, 2022</h3>
                    <p>If The Good Lord Had Intended Us To Walk He Wouldn't Have Invented Roller Skates.</p>
                  </div>
                </Card.ImgOverlay>
                <Card.ImgOverlay>
                  <div className='overlay_container'>
                    <div className='tweet_title_container'>
                      <img src={logo} alt='twitter profile pic' />
                      <div className='tweet_info'>
                        <p className='tweet_name'>Wonka's Chocolate</p>
                        <p><a href='#' >@WonkaChoco</a> 22 May, 2022</p>
                      </div>
                    </div>
                    <p>If The Good Lord Had Intended Us To Walk He Wouldn't Have Invented Roller Skates.</p>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div>
              <Card className="bg-dark text-white">
                <Card.Img src={tweetFive} alt="Card image" />
                <Card.ImgOverlay>
                  <div className='text_over_image'>
                    <h3>18 May, 2022</h3>
                    <p>We Are The Music Makers And We Are The Dreamers Of The Dreams.</p>
                  </div>
                </Card.ImgOverlay>
                <Card.ImgOverlay>
                  <div className='overlay_container'>
                    <div className='tweet_title_container'>
                      <img src={logo} alt='twitter profile pic' />
                      <div className='tweet_info'>
                        <p className='tweet_name'>Wonka's Chocolate</p>
                        <p><a href='#' >@WonkaChoco</a> 18 May, 2022</p>
                      </div>
                    </div>
                    <p>We Are The Music Makers And We Are The Dreamers Of The Dreams.</p>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div>
              <Card className="bg-dark text-white">
                <Card.Img src={tweetSix} alt="Card image" />
                <Card.ImgOverlay>
                  <div className='text_over_image'>
                    <h3>7 May, 2022</h3>
                    <p>Where is fancy bred? In the heart or in the head?</p>
                  </div>
                </Card.ImgOverlay>
                <Card.ImgOverlay>
                  <div className='overlay_container'>
                    <div className='tweet_title_container'>
                      <img src={logo} alt='twitter profile pic' />
                      <div className='tweet_info'>
                        <p className='tweet_name'>Wonka's Chocolate</p>
                        <p><a href='#' >@WonkaChoco</a> 7 May, 2022</p>
                      </div>
                    </div>
                    <p>Where is fancy bred? In the heart or in the head?</p>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Slider>
        </div>
      </section >
      <section id='gallery'>
        <div className='section_container'>
          <a href='#'>
            <div className='subheader_container'>
              <h1>WONKA'S <span>GALLERY</span></h1>
              <div>
                <p>VIEW ALL GALLERIES</p>
                <div className='underline_container'>
                  <div className='colour_two_box'></div>
                </div>
              </div>
            </div>
          </a>
          <div className='cards_container'>
            <a href='#'>
              <div className='card_container'>
                <Card className="bg-dark text-white">
                  <Card.Img src={galleryPic} alt="Card image" />
                  <Card.ImgOverlay>
                    <div className='overlay_container'>
                      <Card.Title>Gallery</Card.Title>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <div className='underline_container'>
                  <div className='colour_two_box'></div>
                </div>
              </div>
            </a>
          </div>
        </div>



      </section >
      <section id='map'>
        <div className='map_container'>
          <Map
            mapboxAccessToken='pk.eyJ1IjoidG9ueWhhdW5zY2htaWR0IiwiYSI6ImNsM3JqbXBwOTBtbjIzY253bW52Y3hvdzcifQ.Uaz5G9sy1R7ZNCJCvHDi0Q'
            initialViewState={{
              longitude: -88.038147,
              latitude: 41.987720,
              zoom: 14
            }}
            height='100%'
            width='100%'
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker longitude={-88.038147} latitude={41.987720} color='red' />
          </Map>
        </div>
      </section>
      <section id='accreditations'>
        <div className='section_container'>
          <a href='#'><img src={badgeOne} alt='icco' className='accred' /></a>
          <a href='#'><img src={badgeTwo} alt='apc' className='accred' /></a>
          <a href='#'><img src={badgeThree} alt='wonka' className='accred' /></a>
          <a href='#'><img src={badgeFour} alt='ppc' className='accred' /></a>
          <a href='#'><img src={badgeFive} alt='choco' className='accred' /></a>
          <a href='#'><img src={badgeSix} alt='wrapper' className='accred' /></a>
          <a href='#'><img src={badgeSeven} alt='wca' className='accred' /></a>
        </div>
      </section>
      <section id='contact'>
        <div className='section_container'>
          <div id='find_us' className='contact_info'>
            <div className='title_container'>
              <h2>FIND US</h2>
              <div className='underline_container'>
                <div className='colour_two_box'></div>
              </div>
            </div>
            <p><span className='highlight_text'>Willy Wonka's Chocolate Factory</span></p>
            <div className='address_logo_container'>
              <address>
                1445 Norwood Ave, <br />
                Itasca, <br />
                IL 60143
              </address>
              <img src={logo} alt='wonka_logo' className='logo' />
            </div>
            <hr />
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
            <hr />
          </div>
          <div id='partnership' className='contact_info'>
            <div className='title_container'>
              <h2>PARTNERSHIP</h2>
              <div className='underline_container'>
                <div className='colour_two_box'></div>
              </div>
            </div>
            <p>Willy Wonka's Chocolate Factory is proud to be part of the British Chocolate Association.</p>
            <a href='#' className='bca'><img src={bca} alt='BCA badge' /></a>
          </div>
        </div>
      </section>
      <footer>
        <div className='staff_login'>
          <a href='#'><h5>STAFF LOGIN</h5></a>
        </div>
        <div className='parent_login'>
          <a href='#'><h5>PARENT LOGIN</h5></a>
        </div>
        <div className='section_container'>
          <p><small>&copy; Willy Wonka's Chocolate Factory. All Rights Reserved. Website by <a href='https://www.tonyhaunschmidt.com/'>Tony Haunschmidt</a>.</small></p>
          <ul>
            <a href="#"><li><small>Website Policy</small></li></a>
            <a href="#"><li><small>Cookies Policy</small></li></a>
            <a href="#" className='small_parent_login'><li><small>Login</small></li></a> {/*hide and have another section above that is unhid */}
            <a href="#" className='small_staff_login'><li><span class="material-symbols-outlined">lock</span></li></a>
          </ul>
        </div>

      </footer>
    </>

  );
}

export default App;
