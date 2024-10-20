import React from 'react'
import MysImg from './MysImg'

import Atanagildo from "../../assets/reyes/rey_atanagildo.png";
import Sisebuto from "../../assets/reyes/rey_Sisebuto.png";
import ataulfo from "../../assets/reyes/rey_ataulfo.png";
import Ervigio from "../../assets/reyes/rey_Ervigio.png";
import Recesvinto from "../../assets/reyes/rey_Recesvinto.png";
import Incognito from "../../assets/reyes/rey_Incognito.png";
import Teodorico from "../../assets/reyes/rey_Teodorico.png";
import Leogivildo from "../../assets/reyes/rey_Leogivildo.png";


function ComponentsReyes() {

    // const newImg = ['Atanagildo','Sisebuto','ataulfo','Ervigio','Leogivildo','Recesvinto','Incognito','Teodorico'];
    const newImg = [Atanagildo,Sisebuto,ataulfo,Ervigio,Leogivildo,Recesvinto,Incognito,Teodorico];


    const reyes=[
        {nombre:"Atanagildo", color:"darkolivegreen",  precio:178 },
        
        {nombre:"Ervigio", color:"crimson", precio:169},
          
        {nombre:"Ataúlfo", color:"peru",  precio:81 },
          
        {nombre:"Leogivildo", color:"darkmagenta",  precio:126  },
        
        {nombre:"Recesvinto", color:"royalblue",  precio:141  },
        
        { nombre:"Sisebuto", color:"teal", precio:69 },
        
        {nombre:'Incognito'},

        {nombre:'Teodorico'}
      ]

  return (

    <div>
      <MysImg rutaImg={newImg}  Reyes={reyes}></MysImg>
    </div>
  )
}

export default ComponentsReyes
