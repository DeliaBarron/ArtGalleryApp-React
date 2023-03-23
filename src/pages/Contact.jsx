import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact-title">
        <p className='mt-5 ms-5'>[ CONTACT ]</p>
        </div>
        <div className="contact row">
            <div className="contact-info col-6">
                <h4>ADDRESS:</h4>
                <span style={{color:'black', fontFamily:'sans-serif', fontWeight:'100', fontSize:'15px'}}>Lützowstraße 38, 10785 Berlin, Germany</span>
                <h4 className='mt-2'>Opening hours:</h4>
                <span style={{color:'black', fontFamily:'sans-serif', fontWeight:'100', fontSize:'15px'}}>Monday – Friday:  15:00 – 18:00<br></br>Saturday – Sunday: by arrangement</span>
                <h4 className='mt-2'>Mail:</h4>
                <span style={{color:'black', fontFamily:'sans-serif', fontWeight:'100', fontSize:'15px'}}>gallery.api@gmail.berlin</span>
                
            </div>
            <div className='contact-map col-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9714.393349255397!2d13.35909!3d52.50451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851332bfeb4eb%3A0x6cc5eb0a18ecbbb9!2sGalerie%20Bottega%20Barone!5e0!3m2!1sen!2smx!4v1679546554502!5m2!1sen!2smx" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </div>
  )
}

export default Contact