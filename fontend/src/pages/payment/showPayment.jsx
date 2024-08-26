import { useState } from "react";
import Section from "../../components/section";
import Main from "../../layouts/main";
import usePayments from "../../hooks/usePayment";
import PaymentButton from "./PaymentButton";

const ShowPayment = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;
    const { payments = [], totalPages = 1, totalItems = 0 } = usePayments(currentPage, limit);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const startItem = (currentPage - 1) * limit + 1;
    const endItem = Math.min(currentPage * limit, totalItems);


    return (
        <Main>
            <Section sectionClassName="mt-24">
                <div className="border py-2">
                    <div className="mb-5 flex justify-between items-center px-5">
                        <div>
                            <h1 className="font-semibold">Data Pembayaran</h1>
                            <span className="text-gray-500">Tabel Pembayaran</span>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-y">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                            <tr className="font-semibold">
                                <td scope="col" className="px-6 py-3">Nomor Transaksi</td>
                                <td scope="col" className="px-6 py-3">Nama Marketing</td>
                                <td scope="col" className="px-6 py-3">Tanggal</td>
                                <td scope="col" className="px-6 py-3">Total</td>
                                <td scope="col" className="px-6 py-3">Status</td>
                                <td scope="col" className="px-6 py-3">Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.length > 0 ? (
                                payments.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4">{item.penjualan.transaction_number}</td>
                                        <td className="px-6 py-4">{item.penjualan.marketing.name}</td>
                                        <td className="px-6 py-4">{item.penjualan.date}</td>
                                        <td className="px-6 py-4">Rp. {item.amount}</td>
                                        <td className="px-6 py-4">{item.status}</td>
                                        <td><PaymentButton paymentId={item.id} /></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="mt-4 flex justify-between items-center px-5">
                        <span>Menampilkan {startItem} - {endItem} dari {totalItems} data</span>
                        <div className="flex gap-5">
                            <button 
                                onClick={() => handlePageChange(currentPage - 1)} 
                                disabled={currentPage === 1}
                                className="bg-indigo-500 px-4 py-2 text-white rounded-md">
                                Previous
                            </button>
                            <button 
                                onClick={() => handlePageChange(currentPage + 1)} 
                                disabled={currentPage === totalPages}
                                className="bg-indigo-500 px-4 py-2 text-white rounded-md">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </Main>
    )
}
export default ShowPayment;
