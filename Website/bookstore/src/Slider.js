import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div>
        <Carousel slide={false}>

        <Carousel.Item>
      <img src="boo2.jpg" alt=""  id="img1" className='w-100'  />

        <Carousel.Caption>
          <h3 className='text-primary'>Second slide label</h3>
          <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      

      <Carousel.Item>
        <img src="https://www.shutterstock.com/shutterstock/photos/1355950388/display_1500/stock-vector-books-and-reading-set-textbooks-for-academic-studies-cute-cats-houseplant-glasses-bundle-of-1355950388.jpg" alt="" id="img1" className='w-100' />
        <Carousel.Caption>
          <h3 className='text-secondary'>First slide label</h3>
          <p className='text-secondary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        
      </Carousel.Item>

      <Carousel.Item>
      <img src="book3.jpg" alt="" id="img1" className='w-100'/>

        <Carousel.Caption>
          <h3 className='text-primary'>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider