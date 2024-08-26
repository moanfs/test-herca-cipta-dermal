import { useState } from "react";
import Section from "../../components/section";
import useMarketing from "../../hooks/useMarketing";
import Main from "../../layouts/main";
import { postPenjualan } from "../../services/penjualanService";

const Home = () =>{
    const marketings = useMarketing();
    const [selectedMarketing, setSelectedMarketing] = useState('');
    const [date, setDate] = useState('2023-05-20');
    const [cargoFee, setCargoFee] = useState('');
    const [totalBalance, setTotalBalance] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleMarketingChange = (event) => {
        setSelectedMarketing(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleCargoFeeChange = (event) => {
        setCargoFee(event.target.value);
    };

    const handleTotalBalanceChange = (event) => {
        setTotalBalance(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            marketing_id: selectedMarketing,
            date,
            cargo_fee: cargoFee,
            total_balance: totalBalance,
        };

        try {
            const response = await postPenjualan(data);
            console.log('Data berhasil disimpan:', response);
            setValidationErrors({});
            setSelectedMarketing('');
            setDate('2023-05-20');
            setCargoFee('');
            setTotalBalance('');
            alert('Data berhasil disimpan!');
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setValidationErrors(error.response.data.errors);
            } else {
                console.error('Error submitting penjualan:', error);
            }
        }
    };

    return(
        <Main>
            <Section sectionClassName="mt-24">
                <div className="p-5 shadow">
                    <div className="my-5">
                        <h1 className="font-semibold">Form Penjualan</h1>
                        <span className="text-gray-500">Form input Penjualan marketing</span>
                    </div>
                    <div className="">
                        <form className="mx-auto" onSubmit={handleSubmit}>
                            <div className="flex gap-5 mb-5">
                                <div className="flex-grow">
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select your country</label>
                                    <select id="marketing" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={selectedMarketing} onChange={handleMarketingChange}>
                                        <option className="bg-gray-200">Pilih Marketing</option>
                                        {marketings.map((marketing) => (
                                        <option key={marketing.id} value={marketing.id}>
                                            {marketing.name}
                                        </option>
                                        ))}
                                    </select>
                                    {validationErrors.marketing_id && <span className="text-red-500">{validationErrors.marketing_id[0]}</span>}
                                </div>
                                <div className="flex-grow">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Tanggal</label>
                                    <input type="date" id="date" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " value={date} onChange={handleDateChange}/>
                                    {validationErrors.date && <span className="text-red-500">{validationErrors.date[0]}</span>}
                                </div>
                            </div>

                            <div className="flex gap-5 mb-5">
                                <div className="flex-grow">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Ongkos</label>
                                    <input type="text" inputMode="number" id="cargo_fee" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " value={cargoFee} onChange={handleCargoFeeChange}/>
                                    {validationErrors.cargo_fee && <span className="text-red-500">{validationErrors.cargo_fee[0]}</span>}
                                </div>
                                <div className="flex-grow">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Total Penjualan</label>
                                    <input type="text" id="total_balance" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " value={totalBalance} onChange={handleTotalBalanceChange}/>
                                    {validationErrors.total_balance && <span className="text-red-500">{validationErrors.total_balance[0]}</span>}
                                </div>
                            </div>

                            <div className="mb-5">
                                <button className="bg-indigo-500 p-2 text-white rounded-md">Simpan</button>
                            </div>

                        </form>
                    </div>
                </div>
            </Section>
        </Main>
    )
}
export default Home