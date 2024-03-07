import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className=" contact-section" id='contact'>
        <div className="main-contact">
          <div className="cont">
            <h1 className='con'>Contact</h1>
            <p className="para-cont">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <h3 className='cont-h3'>Catering Service, 42nd Living St, 43043 New York, NY</h3>
            <p className="para-cont">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form>
              <div className='input-form'>
                <input type='text' placeholder='Name' required />
                <input type="number" value="" min="0" max="10" placeholder='How many people' required />
                <input type="datetime-local" value="2017-06-01T08:30" required />
                <input type='text' placeholder='Message \ Special requirements' required />
                <button type='submit'>SEND MASSAGE</button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
