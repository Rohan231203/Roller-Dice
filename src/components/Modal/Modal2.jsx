import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function ImagePreview() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setIsOpen(true);
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="w-full">
                            <img src={selectedImage} alt="Preview" className="object-contain h-auto w-full" />
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
