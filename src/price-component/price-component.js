import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './price-component.css';
const PriceComponent = () => {
    return (
        <>


<div className = "tab">

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Оплата">
    <div>
            <p className="text">Ми працюємо за повною та частковою передоплатою послуг.
Ви можете сплатити за послуги готівковим або безготівковим способом при оформленні та отриманні замовлення. 
Просто скажіть про це під час оформлення замовлення.
Як тільки передоплата надійшла на рахунок, ми ставимо замовлення в чергу, 
і повідомляєм приблизний час коли замовлення буде готово.</p>
        </div>
  </Tab>
  <Tab eventKey="contact" title="Доставка" >
    <div>
            
            <p className="text"> Ми приймаємо та доставляємо замовлення кур'єром.
Доставку готових замовлень здійснює кур'єр.</p>
        </div>
  </Tab>
</Tabs>
</div>
<div>

  <table border="1" width="90%" cellpadding="0">
  <h1>Ролли</h1>
   <tr>
    <th>Рол без рису Special</th>
    <th>249грн.</th>
   </tr>
   <tr>
    <td>Філадельфія з лососем Special</td>
    <td>179грн.</td>
  </tr>
     <tr>
    <td>Філадельфія Унагі Special</td>
    <td>199грн.</td>
  </tr>
  <tr>
    <td>Філадельфія з лососем Special</td>
    <td>179грн.</td>
  </tr>
  <tr>
    <td>Філадельфія Магуро Special</td>
    <td>189грн.</td>
  </tr>
  <tr>
    <td>Каліфорнія з лососем Special</td>
    <td>189грн.</td>
  </tr>
  <tr>
    <td>Дракон лосось Special</td>
    <td>199грн.</td>
  </tr>
  <tr>
    <td>Дракон Унагі Special</td>
    <td>229грн.</td>
  </tr>
  <tr>
    <td>Дракон Магуро Special</td>
    <td>239грн.</td>
  </tr>
     
  <h1>Суші</h1>
   <tr>
    <th>Гункан Креветка Спайсі</th>
    <th>36грн.</th>
   </tr>
   <tr>
    <td>Гункан Гребінець Спайсі</td>
    <td>45грн.</td>
  </tr>
     <tr>
    <td>Нігірі з креветкою</td>
    <td>35грн.</td>
  </tr>
       <tr>
    <td>Нігірі з вугрему</td>
    <td>49грн.</td>
  </tr>

  <h1>Макі</h1>
   <tr>
    <th>Тамаго Макі</th>
    <th>36грн.</th>
   </tr>
   <tr>
    <td>Макі з сніжним крабом</td>
    <td>39грн.</td>
  </tr>
     <tr>
    <td>Макі Унагі</td>
    <td>89грн.</td>
  </tr>
       <tr>
    <td>Креветка макі</td>
    <td>56грн.</td>
  </tr>

<h1>Доставка</h1>
   <tr>
    <th>По місту</th>
    <th>50грн.</th>
   </tr>
   <tr>
    <td>В приміську зону</td>
    <td>60грн.</td>
  </tr>
     <tr>
    <td>При замовленні від 500 грн</td>
    <td>Безкоштовно.</td>
  </tr>
 </table>
<br/>
<br/>
</div>
        </>
    );
};

export default PriceComponent;