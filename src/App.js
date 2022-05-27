import React from 'react'

function App() {
  return (
    <>
      <header></header>
      <section className='hero'>
        <div className='underline_container'>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
        </div>
        <h2>A little <span>NONSENSE</span> now and then is relished by the <span>WISEST</span> men</h2>
        <div className='underline_container'>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
          <div className='colour_one_box'></div>
          <div className='colour_two_box'></div>
        </div>
      </section>
      <section id='welcome'>
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
      <section id='events'></section>
      <div className='underline_container'>
        <div className='colour_one_box'></div>
        <div className='colour_two_box'></div>
        <div className='colour_one_box'></div>
        <div className='colour_two_box'></div>
      </div>
      <h1>A little <span>NONSENSE</span> now and then is relished by the <span>WISEST</span> men</h1>
      <div className='subheader_container'>
        <h1>FACTORY <span>EVENTS</span></h1>
      </div>
      {/* events box */}
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
            {/*<img />*/}
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
      <footer></footer>
    </>

  );
}

export default App;
