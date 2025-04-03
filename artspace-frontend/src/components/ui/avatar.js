import React from "react";

export function Avatar({ children, className = "" }) {
    return (
        <div className={`h-24 rounded-full overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

export function AvatarImage({ src, alt, className = "" }) {
    return (
        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
        />
    );
}

export function AvatarFallback({ children, className = "" }) {
    return (
        <div
            className={`w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 ${className}`}
        >
            {children}
        </div>
    );
}