import React from 'react'

export default function TheModal() {
  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className={`modal-dialog ${'modal-dialog-centered modal-xl'}`}>
          {/* <div className="modal-dialog modal-xl"> */}
          {/* <div className="modal-dialog modal-dialog-centered"> */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Libero nihil est beatae
              saepe blanditiis mollitia quasi dolorem cum
              expedita delectus! Fugiat, tenetur error
              similique labore ducimus fugit.
              Reprehenderit, autem voluptates.
          </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
