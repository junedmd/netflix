import "./Product.css"

export default  function ProductCard ({name ,emoji ,price ,bgColor }){
    
  
    return(
        <>
        <div className="products" style={{backgroundColor: bgColor}}>
           
           <h2 style={{color:'white'}}> { name}</h2>
           <h2> {emoji}</h2>
           <h2 style={{color:'white'}}> {price}</h2>
              
          
        </div>
        
        </>
    )

}