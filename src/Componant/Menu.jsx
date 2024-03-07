import React from 'react'
import "./Menu.css";
const Menu = () => {
  return (
    <>
    <div className=" manu-section" id="menu">
    <div className="main-manu">
        <div className="manu-left">
                  <h1>Our Menu</h1>
                  <h2>Bread Basket</h2>
                  <p className='para-menu'>Assortment of fresh baked fruit breads and muffins 5.50</p>
                  <h2>Honey Almond Granola with Fruits</h2>
                  <p className='para-menu'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                  <h2>Belgian Waffle</h2>
                  <p className='para-menu'>Vanilla flavored batter with malted flour 7.50</p>
                  <h2>Scrambled eggs</h2>
                  <p className='para-menu'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                      <h2>Blueberry Pancakes</h2>
                  <p className='para-menu'>With syrup, butter and lots of berries 8.50</p>
        </div>
        <div className="manu-right">
                  <img  className="image-foods"src='https://www.w3schools.com/w3images/tablesetting.jpg' alt='menu-food'/>
        </div>
    </div>
          </div>
    </>
  )
}

export default Menu
