import React from "react";
import { Card, CardContent } from "../ui/card";

export default function AboutEditorSection({ data, onChange }) {
    return (
        <section className="w-full py-12 bg-[#f8f7f4b0]">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <Card className="border-0 !bg-transparent rounded-none shadow-none">
                    <CardContent className="p-0">
                        <div className="flex flex-col items-center max-w-[768px] mx-auto text-center">
                            <h2 className="text-3xl font-playfair text-gray-800 mb-7">À propos</h2>

                            <textarea
                                value={data}
                                onChange={(e) => onChange(e.target.value)}
                                placeholder="Écrivez quelque chose à propos de vous..."
                                rows={6}
                                className="w-full p-4 border rounded-md font-playfair text-base text-gray-700"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}