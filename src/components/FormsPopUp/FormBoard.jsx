import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function FormBoard({modal, toggle}) {


  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Board</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
                <label>Board Name</label>
                <input type='text'/>
            </div> 
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
