import React from "react";

export const Select = ({ children, className = "", ...props }) => {
    return (
        <select
            className={`flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-base shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a6b8f] disabled:opacity-50 ${className}`}
            {...props}
        >
            {children}
        </select>
    );
};

export const SelectOption = ({ value, children }) => {
    return <option value={value}>{children}</option>;
};