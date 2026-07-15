import React, { useState, useEffect } from "react";
import { addBanner, updateBanner } from "../services/bannerService";
import "../css/Banner.css";

function BannerForm({ refreshBanners, editBanner, clearEdit }) {

    const [banner, setBanner] = useState({
        title: "",
        subtitle: "",
        offerText: "",
        image: "",
        active: "true"
    });

    useEffect(() => {
        if (editBanner) {
            setBanner({
                title: editBanner.title,
                subtitle: editBanner.subtitle,
                offerText: editBanner.offerText,
                image: editBanner.image,
                active: String(editBanner.active)
            });
        }
    }, [editBanner]);

    const handleChange = (e) => {
        setBanner({
            ...banner,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const bannerData = {
                ...banner,
                active: banner.active === "true"
            };

            if (editBanner) {

                await updateBanner(editBanner.id, bannerData);

                alert("Banner Updated Successfully");

                clearEdit();

            } else {

                await addBanner(bannerData);

                alert("Banner Added Successfully");
            }

            setBanner({
                title: "",
                subtitle: "",
                offerText: "",
                image: "",
                active: "true"
            });

            refreshBanners();

        } catch (error) {
            console.log(error);
            alert("Operation Failed");
        }
    };

    return (
        <form className="food-form" onSubmit={handleSubmit}>

            <h2>{editBanner ? "Edit Banner" : "Add Banner"}</h2>

            <input
                name="title"
                placeholder="Banner Title"
                value={banner.title}
                onChange={handleChange}
            />

            <input
                name="subtitle"
                placeholder="Subtitle"
                value={banner.subtitle}
                onChange={handleChange}
            />

            <input
                name="offerText"
                placeholder="Offer Text"
                value={banner.offerText}
                onChange={handleChange}
            />

            <input
                name="image"
                placeholder="Image URL"
                value={banner.image}
                onChange={handleChange}
            />

            <select
                name="active"
                value={banner.active}
                onChange={handleChange}
            >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>

            <button type="submit">
                {editBanner ? "Update Banner" : "Add Banner"}
            </button>

        </form>
    );
}

export default BannerForm;