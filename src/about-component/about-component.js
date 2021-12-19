import React from 'react';
import img from './img.jpg' 
import './about.css';
const AboutComponent = () => {
    return (
        <>
       <img
      className="AboutImg"
      src={img}
      width="100%"
    />
 <h1 class = "T" >Про нас</h1>
 <div>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d601.0270618054744!2d24.706868716473743!3d48.92113785515915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c12028a9cbb7%3A0xa8e4b74e814aad77!2sSAKURA%20Pan%20Asian%20%26%20Sushi!5e0!3m2!1sru!2sua!4v1639839692342!5m2!1sru!2sua" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
<div className="about" >
<h1 >Ресторан "Sakura"</h1>
<p className="text1" >Готуэмо та доставляемо суші<br/>
м.Івано-Франківськ<br/>
Вул. Гетьмана Мазепи,2А<br/>
<br/>
</p>

<p>
Пн-Сб 11:00-22:00 <br/>
</p>


<p>Тел. 380960001226
</p>
<br/>
<p><a className="socialMedia" href="https://www.instagram.com/sakura_sushi.ua/?igshid=1hhem6dd8i4oi">Наш instagram</a></p>

<p><a className="socialMedia"  href="https://www.facebook.com/SakuraPanAsian/">Наш facebook</a></p>
<br/><br/><br/><br/>


</div>
</div>
 </>
    );
};

export default AboutComponent;
