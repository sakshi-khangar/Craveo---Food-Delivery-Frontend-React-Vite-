import api from "./api";

// Get all orders
export const getAllOrders = async () => {
    const response = await api.get("/orders");
    return response.data;
};


// Update order status
export const updateOrderStatus = async (id, status) => {
    const response = await api.put(
        `/orders/${id}?status=${status}`
    );

    return response.data;
};


// Delete order
export const deleteOrder = async (id) => {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
};