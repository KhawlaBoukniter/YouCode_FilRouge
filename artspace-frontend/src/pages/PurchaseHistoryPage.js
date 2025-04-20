import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import api from "../api";

export default function UserPurchaseHistoryPage() {

    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get("/purchases", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("🎨 Purchases:", res.data);
                setPurchases(res.data.purchases || []);
            } catch (error) {
                console.error("Erreur chargement achats :", error);
                setPurchases([]);
            }
        };

        fetchPurchases();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <h1 className="text-4xl font-playfair text-gray-800 mb-8">
                        Mon historique d'achats
                    </h1>

                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-8 overflow-x-auto">
                            {purchases.length === 0 ? (
                                <p className="text-center text-gray-500 font-playfair">Aucun achat trouvé.</p>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-gray-600 font-playfair">Œuvre</TableHead>
                                            <TableHead className="text-gray-600 font-playfair">Artiste</TableHead>
                                            <TableHead className="text-gray-600 font-playfair">Date</TableHead>
                                            <TableHead className="text-right text-gray-600 font-playfair">Prix</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {purchases.map((purchase) => (
                                            <TableRow key={purchase.id} className="hover:bg-gray-50">
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className="w-12 h-12 rounded bg-cover bg-center"
                                                            style={{ backgroundImage: `url(${purchase.image})` }}
                                                        ></div>
                                                        <a
                                                            href={`/artworks/${purchase.id}`}
                                                            className="font-playfair text-[#3a6b8f] hover:underline"
                                                        >
                                                            {purchase.title}
                                                        </a>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-playfair text-gray-600">
                                                    {purchase.artist?.user?.name || "—"}
                                                </TableCell>
                                                <TableCell className="font-playfair text-gray-600">
                                                    {purchase.pivot?.purchased_at?.slice(0, 10) || "—"}
                                                </TableCell>
                                                <TableCell className="text-right font-playfair text-gray-800">
                                                    {purchase.pivot?.price} €
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>

                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}