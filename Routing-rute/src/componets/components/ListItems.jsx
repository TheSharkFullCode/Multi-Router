import React from 'react'

function ListItems() {
    const  MyListFruit= [
        'manzanas',
        'Peras',
        'uvas',
        'fresas',
        'Banano',
        'Mango',
        'Platano',
        'Melon',
        'Papaya'
        ];
        const Colors = [
            'red',
            'green',
            'purple',
            'pink',
            'orange',
            'darkblue',
            'lightyellow',
            'blue',
            'darkgreen'
        ]

        
        return (
            
            <div>
                <ul>
                {

                    
                    MyListFruit.map((products,index)=>(

                        <li key={index} style={{color: Colors[index] }}>
                            {products}
                        </li>
                    ))
                }
            
                </ul>
        
    </div>
  )
}

export default ListItems
