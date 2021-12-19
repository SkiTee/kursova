import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from './img/slide1.jpg'
import slide2 from './img/slide2.jpg'
import slide3 from './img/slide3.jpg'
import home from './img/home.jpg'
import './style.css';
const HomeComponent = () => {
    return (

<>


<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="slide"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className = "h1">Ролли</h1>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="slide"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1 className = "h1">Суші</h1>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src={slide3}
      alt="Third slide"
    />
    
    <Carousel.Caption>
      <h1 className = "h1">Макі</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="content">
<div className="home">
<p className="hometext">
Ви вірите в те, що їжу потрібно готувати з любовю? <br/> 
Окрім виключно найкращих продуктів, ми можемо похвалитись щей тим, що як ніхто любимо те, що створюємо.<br/> 
Наші суші – Ваш гормон щастя. Асортимент досить великий і задовільнить будь-які ваші забаганки. <br/>
Замовляйте суші Sakura, і переконаєтесь, що спробувавши одного разу наші суші –  Ви пошкодуєте тільки про те, що не зробили цього раніше!<br/>
</p>
<br/>
<br/>
</div>
  <img
      className="home"
      src={home}
    />
</div>
</>

    );
};
export default HomeComponent;


