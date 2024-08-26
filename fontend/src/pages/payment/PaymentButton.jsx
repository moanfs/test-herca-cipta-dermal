/* eslint-disable react/prop-types */
import { useState } from "react";
import { getPayment, setPayment } from "../../services/paymentService";

const PaymentButton = ({ paymentId }) => {
    // eslint-disable-next-line no-unused-vars
    const [snapToken, setSnapToken] = useState();

    const handleGetSnapToken = async () => {
        try {
            const data = await getPayment(paymentId);
            console.log("API Response:", data);
            const { snapToken } = data;

            if (snapToken) {
                setSnapToken(snapToken);
                handlePayment(snapToken);
                try {
                    await setPayment(paymentId, 'paid');
                    console.log('Status Payment Updated:', 'paid');
                } catch (error) {
                    console.error('Error updating payment status:', error);
                }
            } else {
                console.error('Snap Token is not available');
            }
        } catch (error) {
            console.error('Error getting Snap Token:', error);
        }
    };

    const handlePayment = (token) => {
        if (!token) {
            console.error('Snap Token is not available');
            return;
        }
    
        window.snap.pay(token, {
            onSuccess: async (result) => {
                console.log('Payment successful:', result);
            },
            onPending: (result) => {
                console.log('Payment pending:', result);
            },
            onError: (result) => {
                console.error('Payment failed:', result);
            },
            onClose: () => {
                console.log('Payment popup closed');
                window.location.href;
            }
        });
    };

    return (
        <button onClick={handleGetSnapToken} className="bg-indigo-500 px-2 py-2 text-white rounded-md">
            Bayar Sekarang
        </button>
    );
};

export default PaymentButton;
