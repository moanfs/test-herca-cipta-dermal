import Section from "../../components/section";
import Main from "../../layouts/main";
import useKomisi from "../../hooks/useKomisi";

const ShowKomisi = () =>{
    const komisi = useKomisi();
    return(
        <Main>
            <Section sectionClassName="mt-24">
                <div>
                    <div className="my-5 flex justify-between">
                        <div>
                            <h1 className="font-semibold">Data Komisi</h1>
                            <span className="text-gray-500">Tabel Komisi setiap Marketing dihitung berdasarkan bulan dan tahun</span>
                        </div>
                        <div className="flex gap-4">
                            <h1>Filter</h1>
                            <div >
                               <input type="date" className="border rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                            <tr className="font-semibold">
                                <td scope="col" className="px-6 py-3">Nama Marketing</td>
                                <td scope="col" className="px-6 py-3">Bulan</td>
                                <td scope="col" className="px-6 py-3">Omset</td>
                                <td scope="col" className="px-6 py-3">Komisi % </td>
                                <td scope="col" className="px-6 py-3">Total Komisi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {komisi.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4">{item.marketing}</td>
                                <td className="px-6 py-4">{item.bulan}</td>
                                <td className="px-6 py-4">{item.omzet}</td>
                                <td className="px-6 py-4">{item.komisi_percent}</td>
                                <td className="px-6 py-4">{item.komisi_nominal}</td>
                            </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </Section>
        </Main>
    )
}
export default ShowKomisi