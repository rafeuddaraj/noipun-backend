import { Modal, TextInput, Textarea } from "keep-react";
import { Trash } from "phosphor-react";
export default function AddressModal({ showModal, handleAddressModal }) {
    return (
        <>
            <Modal
                size="md"
                onClose={handleAddressModal}
                show={showModal}>
                
                <Modal.Header>Shipping Info</Modal.Header>
                <form action="#">
                    <Modal.Body>
                        <div className="space-y-6">
                            <div className="form grid grid-cols-1 gap-3">
                                <TextInput
                                    id="#id-8"
                                    placeholder="Name"
                                    color="gray"
                                />
                                <TextInput
                                    id="#id-8"
                                    placeholder="Phone number"
                                    color="gray"
                                />
                                <TextInput
                                    id="#id-8"
                                    placeholder="Alternative phone number"
                                    color="gray"
                                />
                                <div className="grid grid-cols-2 gap-3">
                                    <select
                                        id="country"
                                        name="country"
                                        className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300">
                                        <option value="usa">City</option>
                                        <option value="canada">Dhaka</option>
                                        <option value="uk">Mymensingh</option>
                                    </select>
                                    {/* Area */}
                                    <select
                                        id="country"
                                        name="country"
                                        className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300">
                                        <option value="usa">Area</option>
                                        <option value="canada">Dhaka</option>
                                        <option value="uk">Mymensingh</option>
                                    </select>
                                    {/* Zone */}
                                    <select
                                        id="country"
                                        name="country"
                                        className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300">
                                        <option value="usa">Zone</option>
                                        <option value="canada">Dhaka</option>
                                        <option value="uk">Mymensingh</option>
                                    </select>
                                </div>
                                <Textarea
                                    id="comment"
                                    placeholder="Full Address"
                                    withBg={true}
                                    color="gray"
                                    border={true}
                                    rows={4}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            className="bg-green-400 px-4 py-2 block w-full"
                            onClick={handleAddressModal}>
                            Confirm
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}
