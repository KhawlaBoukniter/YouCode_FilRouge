import React from "react";
import { Input } from "../ui/input";
import Tags from "../ui/tags";
import { Textarea } from "../ui/textarea";
import { Select, SelectOption } from "../ui/select";
import Button from "../ui/button";

export default function ArtworkForm() {
    const dimensionFields = [
        { id: "width", label: "Largeur" },
        { id: "height", label: "Hauteur" },
        { id: "depth", label: "Profondeur" },
    ];

    return (
        <form className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Titre de l'œuvre</label>
                        <Input placeholder="Entrez le titre" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Description</label>
                        <Textarea placeholder="Décrivez votre œuvre" className="min-h-[120px]" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Catégorie</label>
                        <Select>
                            <SelectOption value="peinture">Peinture</SelectOption>
                            <SelectOption value="sculpture">Sculpture</SelectOption>
                            <SelectOption value="photographie">Photographie</SelectOption>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 min-h-[300px]">
                    <img
                        src="https://c.animaapp.com/m9yoyfdxkNTcMZ/img/frame-1.svg"
                        alt="Upload 3D Model"
                        className="w-10 h-10 mb-4"
                    />
                    <p className="text-gray-600 font-cormorant">Modèle 3D</p>
                    <p className="text-sm text-gray-400">Glissez votre fichier 3D ici ou</p>
                    <Button variant="outline" className="mt-4">
                        Parcourir les fichiers
                    </Button>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Dimensions</label>
                        <div className="grid grid-cols-3 gap-4">
                            {dimensionFields.map((field) => (
                                <Input key={field.id} type="number" placeholder={field.label} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Année de création</label>
                        <Input type="number" placeholder="2025" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-600 font-cormorant">Tags</label>
                    <Tags placeholder="Ajoutez des tags séparés par des virgules" />
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline" className="h-12 px-8">
                    Annuler
                </Button>
                <Button className="h-12 px-8 bg-[#3a6b8f] text-white">
                    Soumettre l'œuvre
                </Button>
            </div>
        </form>
    );
}