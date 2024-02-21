import React, {useState} from 'react'
import FormBoard from '../FormsPopUp/FormBoard'

export default function Board() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>CREATE BOARD</button>
      </div>
      <FormBoard toggle={toggle} modal={modal}/>
    </>


  )
}
