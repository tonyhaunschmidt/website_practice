import React from 'react'

function App() {
  return (
    <>
      <header></header>
      <section className='hero'>
        <h1>hello</h1>
      </section>
      <section id='welcome'></section>
      <section id='events'></section>
      <section id='social'></section>
      <section id='gallery'></section>
      <section id='map'></section>
      <section id='accreditations'></section>
      <section id='contact'>
        <div id='find_us' className='contact_info'>
          <div className='title_container'>
            <h2>FIND US</h2>
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
