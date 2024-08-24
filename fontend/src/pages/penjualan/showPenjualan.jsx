import { useState } from "react";
import usePenjualan from "../../hooks/usePenjualan";
import Section from "../../components/section";
import Main from "../../layouts/main";
import { Link } from "react-router-dom";

const ShowPenjualan = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;
    const { penjualan = [], totalPages = 1 } = usePenjualan(currentPage, limit);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <Main>
            <Section sectionClassName="mt-24">
                <div>
                    <div className="my-5 flex justify-between items-center">
                        <div>
                            <h1 className="font-semibold">Data Penjualan</h1>
                            <span className="text-gray-500">Tabel Penjualan setiap Marketing</span>
                        </div>
                        <div className="">
                            <Link to='/penjualan/create' className="bg-indigo-500 px-2 text-center text-white rounded-md py-1">Form Penjualan</Link>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                            <tr className="font-semibold">
                                <td scope="col" className="px-6 py-3">Nomor Transaksi</td>
                                <td scope="col" className="px-6 py-3">Nama Marketing</td>
                                <td scope="col" className="px-6 py-3">Tanggal</td>
                                <td scope="col" className="px-6 py-3">Ongkos</td>
                                <td scope="col" className="px-6 py-3">Total Penjualan</td>
                                <td scope="col" className="px-6 py-3">Total Keseluruhan</td>
                            </tr>
                        </thead>
                        <tbody>
                            {penjualan.length > 0 ? (
                                penjualan.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4">{item.transaction_number}</td>
                                        <td className="px-6 py-4">{item.marketing.name}</td>
                                        <td className="px-6 py-4">{item.date}</td>
                                        <td className="px-6 py-4">Rp. {item.cargo_fee}</td>
                                        <td className="px-6 py-4">Rp. {item.total_balance}</td>
                                        <td className="px-6 py-4">Rp. {item.grand_total}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="mt-4 flex justify-between items-center">
                        <span>Page {currentPage} of {totalPages}</span>
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
export default ShowPenjualan;
