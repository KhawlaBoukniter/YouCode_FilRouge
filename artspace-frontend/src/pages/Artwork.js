import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/artwork/Header";
import Description from "../components/artwork/Description";
import Comments from "../components/artwork/Comments";
import AddCommentForm from "../components/artwork/AddCommentForm";
import api from "../api";

export default function Artwork() {
    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);
    const [comments, setComments] = useState([]);
    const [likedByUser, setLikedByUser] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [canEdit, setCanEdit] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isPurchased, setIsPurchased] = useState(false);

    console.log(typeof id);


    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get(`/artworks/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = res.data;

                setArtwork(res.data.artwork);
                setComments(res.data.comments.data || []);
                setLikedByUser(res.data.liked_by_user);
                setIsSaved(res.data.is_saved_by_user);
                setCanEdit(res.data.can_edit);
                setCanDelete(res.data.can_delete);
                setLoading(false);
                setIsPurchased(res.data.is_purchased)
            } catch (error) {
                console.error("Erreur chargement de l’œuvre :", error);
                setLoading(false);
            }
        };

        fetchArtwork();
    }, [id]);

    if (loading) return <p className="text-center mt-10">Chargement...</p>;
    if (!artwork) return <p className="text-center mt-10">Œuvre introuvable.</p>;

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <Header
                        artwork={artwork}
                        isSaved={isSaved}
                        isLiked={likedByUser}
                        canEdit={canEdit}
                        canDelete={canDelete}
                        isPurchased={isPurchased}
                    />
                    <Description description={artwork.description} />
                    <Comments artworkId={artwork.id} />
                    <AddCommentForm artworkId={artwork.id} setComments={setComments} />
                </div>
            </main>
            <Footer />
        </div>
    );
}