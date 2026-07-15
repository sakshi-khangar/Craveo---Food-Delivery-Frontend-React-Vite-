import React, { useEffect, useState } from "react";
import BannerForm from "../components/BannerForm";
import {
    getAllBanners,
    deleteBanner
} from "../services/bannerService";

import "../css/Banner.css";

function Offers() {

    const [banners, setBanners] = useState([]);
    const [editBanner, setEditBanner] = useState(null);

    useEffect(() => {
        loadBanners();
    }, []);

    const loadBanners = async () => {
        try {
            const res = await getAllBanners();
            setBanners(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const removeBanner = async (id) => {
        try {
            await deleteBanner(id);
            alert("Banner Deleted Successfully");
            loadBanners();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (banner) => {
        setEditBanner(banner);
    };

    const clearEdit = () => {
        setEditBanner(null);
    };

    return (
        <div className="food-page">

            <BannerForm
                refreshBanners={loadBanners}
                editBanner={editBanner}
                clearEdit={clearEdit}
            />

            <h2 className="food-list-heading">
                All Banners
            </h2>

            <div className="food-grid">

                {banners.map((banner) => (

                    <div className="food-card" key={banner.id}>

                        <div className="food-card-img">

                            {banner.image?.startsWith("http") ? (
                                <img
                                    src={banner.image}
                                    alt={banner.title}
                                />
                            ) : (
                                <span>🎁</span>
                            )}

                        </div>

                        <div className="food-card-body">

                            <h3>{banner.title}</h3>

                            <p className="food-desc">
                                {banner.subtitle}
                            </p>

                            <p className="food-price">
                                {banner.offerText}
                            </p>

                            <p>
                                Status :
                                <strong>
                                    {banner.active ? " Active" : " Inactive"}
                                </strong>
                            </p>

                            <div className="food-card-actions">

                                <button
                                    onClick={() => handleEdit(banner)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete"
                                    onClick={() => removeBanner(banner.id)}
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Offers;