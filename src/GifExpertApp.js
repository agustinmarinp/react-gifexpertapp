
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'; 
import {GifGrid} from './components/GifGrid'



export const GifExpertApp = () => {

    
    const [categorias, setcategorias] = useState( ['Goku'] )


    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setcategorias = { setcategorias } />
            
            <ol>
                {
                    categorias.map( categoria => 
                        
                        <GifGrid                 
                            key = { categoria }
                            categoria = { categoria }                        
                        /> 
                    
                    )
                }
            </ol>
            
        </>
    )
}
