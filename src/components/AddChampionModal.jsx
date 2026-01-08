import { useRef } from "react";
import { Modal } from "bootstrap";

const AddChampionModal = ({ setChampions }) => {
  const modalRef = useRef(null);

  function onAddChampionSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const payload = {
      id: crypto.randomUUID(),
      name: formData.get("name").trim(),
      imgUrl: formData.get("imgUrl").trim(),
      years: formData.get("years").trim(),
      country: formData.get("country").trim(),
    };

    setChampions((prev) => [...prev, payload]);
    console.log("Champion added");
    form.reset();

    const modalEl = modalRef.current;
    if (!modalEl) return;
    
    Modal.getOrCreateInstance(modalEl).hide();
  }

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="addChampionModal"
      tabIndex="-1"
      aria-labelledby="addChampionModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addChampionModalLabel">
              Add New Champion
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div id="alertBoxModalAddChampion"></div>
          <div className="modal-body">
            <form
              id="addChampionForm"
              className="vstack gap-3"
              onSubmit={onAddChampionSubmit}
            >
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  className="form-control"
                  name="imgUrl"
                  type="text"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Years</label>
                <input
                  className="form-control"
                  name="years"
                  type="text"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  className="form-control"
                  name="country"
                  type="text"
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="addChampionBtn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChampionModal;
