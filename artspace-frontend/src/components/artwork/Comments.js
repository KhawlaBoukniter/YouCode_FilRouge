import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { TrashIcon } from "lucide-react";
import Toast from "../ui/toast";

export default function Comments() {
    const [toast, setToast] = useState(null);

    const [comments, setComments] = useState([
        {
            id: 1,
            user: "Amélie Dupont",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Une œuvre magnifique qui transmet énormément d'émotions !",
        },
        {
            id: 2,
            user: "Thomas Lefèvre",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "J'adore les couleurs et l'énergie que dégage ce tableau.",
        },
        {
            id: 3,
            user: "Clara Martin",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "Une vraie réussite artistique, félicitations à l'artiste !",
        },
    ]);

    const handleDelete = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const confirmed = confirm("Voulez-vous vraiment supprimer ce commentaire ?");
        if (confirmed) {
            setComments(comments.filter(comment => comment.id !== id));
            setToast({ message: "Commentaire supprimé avec succès", type: "success" });
        }
    };

    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pt-8 pb-0">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    Commentaires
                </CardTitle>
            </CardHeader>

            <CardContent className="p-8 space-y-6">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="flex items-start gap-4 bg-gray-100 rounded-lg p-4 hover:shadow transition justify-between"
                    >
                        <div className="flex gap-4">
                            <Avatar className="!h-12 w-12 self-center">
                                <AvatarImage src={comment.avatar} alt={comment.user} />
                            </Avatar>

                            <div>
                                <h4 className="font-playfair text-lg text-gray-800">{comment.user}</h4>
                                <p className="text-gray-600 mt-1 font-playfair">{comment.text}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleDelete(comment.id)}
                            className="text-gray-400 hover:text-red-500 transition"
                            title="Supprimer"
                        >
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                ))}
            </CardContent>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </Card>
    );
}