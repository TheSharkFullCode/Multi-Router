import {React,useState} from 'react'
import Buttons from './buttons/Buttons'

function ComponetsButtons({}) {

  const [count, setCount] = useState(0)

  const Aumentar=()=>{
    setCount(count+1)
  }

  const Disminuir=()=>{
    setCount(count-1)
  }

  return (
    <>
    <div className='unboxing'>        
      <Buttons className={'style1'} texto={'Aunmentar'} OnClick={Aumentar}> </Buttons>
      <Buttons className={'style2'} texto={'Disminuir'} OnClick={Disminuir}> </Buttons>
      <h2>{count}</h2>
    </div>
    </>
  )
}

export default ComponetsButtons
