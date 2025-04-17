import React from "react";

export default function Badge({ className = "", children }) {
    return (
        <div
            className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-playfair font-normal bg-gray-100 text-gray-800 ${className}`}
        >
            {children}
        </div>
    );
}