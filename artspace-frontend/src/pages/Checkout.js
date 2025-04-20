import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
    const [params] = useSearchParams();

    useEffect(() => {
        const type = params.get("type");
        const id = params.get("id");

        if (type && id) {
            axios.post(`/api/stripe/checkout`, { type, id })
                .then(res => {
                    if (res.data.url) {
                        window.location.href = res.data.url;
                    }
                })
                .catch(err => {
                    console.error("Erreur lors du checkout :", err);
                });
        }
    }, [params]);

    return (
        <div className="text-center mt-20 text-xl font-playfair">
            Redirection vers Stripe en cours...
        </div>
    );
}