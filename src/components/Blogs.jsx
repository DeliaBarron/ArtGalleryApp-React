import React from 'react'


const Blogs = ({ artist, display }) => {

//  console.log(first)
   
  return (
      <div className='blog container-fluid'>
       <div className="row">
        <div className="col-lg-7 blog-foto">
          
        </div>
        <div className='col-lg-5 blog-list'>
            {
              display?
              <>
               <p>{display.id} </p>
              <p>{display.title} </p>
              {/* <p>{a.name} </p> */}
              </>
              
              :<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore exercitationem ab mollitia quod necessitatibus ullam recusandae minus iste culpa debitis, error possimus at obcaecati deleniti iure quis. Ipsum, ad repellat! </p>
              
            }
         
        </div>
        <div className='row mt-3 blog-info'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti omnis nemo et non dolorem esse ducimus. Esse explicabo vitae deleniti! Nemo totam qui nobis quaerat iste laboriosam temporibus molestiae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui molestias et ducimus reprehenderit. Quisquam veniam eum, aliquid inventore recusandae maxime veritatis itaque, quae dignissimos consequuntur animi eaque consequatur voluptas.
        </div>
       </div>

    </div>
  )
}

export default Blogs