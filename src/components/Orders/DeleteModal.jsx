import { Button, Modal } from "keep-react";
import { Trash } from "phosphor-react";

export default function DeleteModal({ showErrorModalX, onClickErrorModal }) {
    return (
        <>
            <Modal
                icon={<Trash size={28} color="#E92215" />}
                size="md"
                show={showErrorModalX}
                onClose={onClickErrorModal}>
                <Modal.Header>Do you want to delete this file?</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-body-4 leading-relaxed text-metal-500">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-green-400 px-4 py-2 block w-full"
                        onClick={onClickErrorModal}>
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
