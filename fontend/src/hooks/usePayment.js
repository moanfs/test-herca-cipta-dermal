import { useState, useEffect } from "react";
import { getPayment, getPayments } from "../services/paymentService";

const usePayments = (page = 1, limit = 10) => {
    const [payments, setPayments] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const {data, last_page, total} = await getPayments(page, limit);
                setPayments(data || []);
                setTotalPages(last_page || 1);
                setTotalItems(total || 0);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        fetchPayments();
    }, [page, limit]);

    return { payments, totalPages , totalItems};
}

export default usePayments;

export const usePayment = (paymentId) => {
    const [payment, setPayment] = useState(null);

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const data = await getPayment(paymentId);
                setPayment(data);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        fetchPayment();
    }, [paymentId]);

    return payment;
};