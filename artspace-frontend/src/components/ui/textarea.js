import React from "react";

const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={`flex w-full min-h-[100px] rounded-md border border-gray-300 bg-transparent px-4 py-2 text-base shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a6b8f] disabled:opacity-50 ${className}`}
            {...props}
        />
    );
});

Textarea.displayName = "Textarea";

export { Textarea };