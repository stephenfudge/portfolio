export default function Modal({ isOpen, closeModal }) {
  console.log("isOpen:", isOpen);
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75"
          onClick={handleOverlayClick}
          data-testid="overlay"
        >
          <div
            className="modal-box relative p-8 bg-white w-1/2 mx-auto my-16 rounded-lg shadow-lg"
            data-testid="modal"
          >
            <div className="modal-header flex justify-between items-center border-b-2 pb-4 mb-4">
              <h3 className="modal-title text-lg font-bold">Form Submitted!</h3>
              <button
                className="btn btn-ghost btn-square"
                onClick={closeModal}
                data-testid="close-button"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Thanks for reaching out! I'll be in touch shortly.</p>
            </div>
            <div className="modal-footer flex justify-end border-t-2 pt-4 mt-4">
              <button className="btn btn-primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
