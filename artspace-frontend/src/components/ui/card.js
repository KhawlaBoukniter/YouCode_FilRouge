import React from "react";

export function Card({ children, className = "" }) {
    return (
        <div className={`bg-white rounded-xl shadow-lg ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({ children, className = "" }) {
    return <div className={`${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
    return (
        <div className={`p-6 ${className}`}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className = "" }) {
    return (
        <h3 className={`text-lg font-semibold ${className}`}>
            {children}
        </h3>
    );
}