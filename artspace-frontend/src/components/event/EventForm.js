import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Button from "../ui/button";

export default function EventForm() {
    return (
        <form className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Nom de l'événement</label>
                        <Input placeholder="Entrez le titre de l'événement" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Lieu</label>
                        <Input placeholder="Entrez le lieu de l'événement" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Date</label>
                        <Input type="date" />
                    </div>
                </div>

                <div className="pt-7">
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-8 min-h-[300px] text-center">
                        <p className="text-gray-500 font-playfair">Téléverser une image d'événement</p>
                        <input type="file" className="hidden" />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-600 font-playfair">Description</label>
                <Textarea
                    placeholder="Décrivez votre événement"
                    className="min-h-[120px]"
                />
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline" className="h-12 px-8">
                    Annuler
                </Button>
                <Button className="h-12 px-8 bg-[#3a6b8f] text-white">
                    Soumettre l'événement
                </Button>
            </div>
        </form>
    );
}