import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

export const ModalComponent = ({ showModal, handleShowModal }) => {
    return (
        <>
            <Modal show={showModal} size="sm">
                <Modal.Body>
                    <div className="flex items-center md:items-start gap-2">
                        <div className="mt-2 rounded bg-primary-50  p-2  text-gray-400   ">
                            <CloudArrowUp size={24} color="blue" />
                        </div>
                        <h3 className="text-body-4 md:text-body-2 font-semibold text-metal-900">
                            Do you want to upload this file?
                        </h3>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className=" flex justify-start gap-4 ">
                        <Button
                            type="outlineGray"
                            size="sm"
                            onClick={handleShowModal}>
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            color="info"
                            size="sm"
                            onClick={handleShowModal}>
                            Confirm
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};
