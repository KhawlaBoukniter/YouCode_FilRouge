import React, { useState, forwardRef, useImperativeHandle } from "react";

const ImageUpload = forwardRef(({ onFileSelect, title = "Modèle 2D", subtitle = "Glissez votre image ici ou" }, ref) => {
    const [fileName, setFileName] = useState("");

    useImperativeHandle(ref, () => ({
        reset() {
            setFileName("");
        }
    }));

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type.startsWith("image/"))) {
            setFileName(file.name);
            onFileSelect(file);
        } else {
            alert("Veuillez sélectionner une image au format JPG, PNG ou WebP.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl p-8 min-h-[300px] text-center bg-white">
            <div className="mb-4">
                <img
                    src="https://c.animaapp.com/m9yoyfdxkNTcMZ/img/frame-1.svg"
                    alt={title}
                    className="w-10 h-10 mx-auto"
                />
            </div>

            <h2 className="font-['Cormorant',Helvetica] text-lg text-gray-800 mb-2">
                {title}
            </h2>

            <p className="text-gray-400 text-sm mb-6 font-['Cormorant',Helvetica]">
                {subtitle}
            </p>

            <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />

            <label
                htmlFor="imageUpload"
                className="bg-gray-100 px-6 py-2 rounded-md font-['Cormorant',Helvetica] text-gray-700 text-base cursor-pointer hover:bg-gray-200 transition"
            >
                Parcourir les fichiers
            </label>

            {fileName && (
                <p className="mt-4 text-sm text-gray-600">
                    Fichier sélectionné : <span className="font-semibold">{fileName}</span>
                </p>
            )}
        </div>
    );
})

ImageUpload.displayName = "ImageUpload";
export default ImageUpload;