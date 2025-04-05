import React, { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-md text-white shadow-lg transition-all
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
        >
            {message}
        </div>
    );
}