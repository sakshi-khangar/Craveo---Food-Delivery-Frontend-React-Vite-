import React, { useEffect, useState } from "react";
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";

import "../css/Categories.css";

export default function Categories() {

  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const category = {
      name,
      image,
    };

    if (editingId == null) {

      await addCategory(category);

    } else {

      await updateCategory(editingId, category);

      setEditingId(null);

    }

    setName("");
    setImage("");

    loadCategories();
  };

  const handleEdit = (cat) => {

    setEditingId(cat.id);

    setName(cat.name);

    setImage(cat.image);

  };

  const handleDelete = async (id) => {

    if (window.confirm("Delete Category?")) {

      await deleteCategory(id);

      loadCategories();

    }

  };

  return (
    <div className="category-container">

      <h2>Category Management</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL or Emoji"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit">
          {editingId ? "Update Category" : "Add Category"}
        </button>

      </form>

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Image</th>

            <th>Name</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {categories.map((cat) => (

            <tr key={cat.id}>

              <td>{cat.id}</td>

              <td>
  <img
    src={cat.image}
    alt={cat.name}
    className="category-img"
    onError={(e) => {
      e.target.src = "https://via.placeholder.com/80?text=No+Image";
    }}
  />
</td>

              <td>{cat.name}</td>

              <td>

                <button onClick={() => handleEdit(cat)}>
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(cat.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}