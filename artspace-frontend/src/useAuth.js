import { useEffect, useState } from "react";
import api from "./api";

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const response = await api.get("/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const fullUser = {
                    ...response.data.user,
                    artist: response.data.artist,
                };

                localStorage.setItem("user", JSON.stringify(fullUser));
                setUser(fullUser);

                setUser(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'utilisateur :", error);
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    return { user };
}