import React from "react";

function Button({ children, variant = "default", className = "", ...props }) {
    const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all";
    const variants = {
        default: "bg-[#3a6b8f] text-white hover:bg-[#305874]",
        outline: "border border-gray-300 text-black bg-white hover:bg-gray-100",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;