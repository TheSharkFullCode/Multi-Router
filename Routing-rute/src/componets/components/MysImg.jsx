import React from 'react'


function MysImg({rutaImg,Reyes}) {

 
  return (
    <div>

        {
            rutaImg.map((imgs,index)=>{
                return(
                  <div key={index} className='container' >
                        <div className='imgreyes' >

                         <img src={imgs} alt="" className='imagenreyes'/> 
                         <span>{Reyes[index]?.nombre}</span>
                        </div>
                  </div>

                    
                )
            })
        }

    </div>
  )
}

export default MysImg
