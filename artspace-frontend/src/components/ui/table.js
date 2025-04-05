import React from "react";

export function Table({ children, className = "" }) {
    return (
        <div className="relative w-full overflow-x-auto">
            <table className={`w-full text-sm text-left ${className}`}>
                {children}
            </table>
        </div>
    );
}

export function TableHeader({ children, className = "" }) {
    return (
        <thead className={`${className}`}>
            {children}
        </thead>
    );
}

export function TableBody({ children, className = "" }) {
    return (
        <tbody className={`${className}`}>
            {children}
        </tbody>
    );
}

export function TableRow({ children, className = "" }) {
    return (
        <tr className={`border-b ${className}`}>
            {children}
        </tr>
    );
}

export function TableHead({ children, className = "" }) {
    return (
        <th scope="col" className={`px-6 py-4 font-medium text-gray-500 ${className}`}>
            {children}
        </th>
    );
}

export function TableCell({ children, className = "" }) {
    return (
        <td className={`px-6 py-4 ${className}`}>
            {children}
        </td>
    );
}