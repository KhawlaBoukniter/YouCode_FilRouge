import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Button from "../ui/button";

export default function AddCommentForm() {
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            console.log("Commentaire envoyé:", comment);
            setComment("");
        }
    };

    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pt-8 pb-0">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    Laisser un commentaire
                </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a6b8f] resize-none font-playfair text-gray-700"
                        placeholder="Votre commentaire..."
                        required
                    ></textarea>

                    <Button
                        type="submit"
                        className="self-end h-10 bg-[#3a6b8f] text-white rounded-lg font-playfair hover:bg-[#345c78] transition"
                    >
                        Envoyer
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}