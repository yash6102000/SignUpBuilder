import React, { useState } from 'react'
const LayoutStyling = ()=>{
       
   
    const [initialPos,   setInitialPos] = React.useState(100);
    const [initialSize, setInitialSize] = React.useState(100);
  
    const initial = (e:any) => {
        
        let resizable = document.getElementById('Resizable');
        
        setInitialPos(e.clientX);
        //@ts-ignore
        setInitialSize(resizable.offsetWidth);
        
    }
    
    const resize = (e:any) => {
        
        let resizable:any = document.getElementById('Resizable');
        //@ts-ignore
        resizable.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
      
    }
    return(
        <div><div className = 'flex items-center'>
        <div className='h-40 w-40'/>
        <div className='bg-blue-600 cursor-col-resize h-2 w-3'
            draggable   = 'true'
            onDragStart = {initial} 
            onDrag      = {resize}
        />
    </div></div>
    )
}
export default LayoutStyling