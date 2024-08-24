import Section from "../../components/section";
import useMarketing from "../../hooks/useMarketing";
import Main from "../../layouts/main";

const Home = () =>{
    const marketings = useMarketing();
    return(
        <Main>
            <Section sectionClassName="mt-24">
                <div>
                    <div className="my-5 flex justify-between">
                        <div>
                            <h1 className="font-semibold">Data Marketing</h1>
                            <span className="text-gray-500">Tabel Markating Herca</span>
                        </div>
                        <div className="flex gap-4">
                            
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                            <tr className="font-semibold">
                                <td scope="col" className="px-6 py-3">No</td>
                                <td scope="col" className="px-6 py-3">Nama Marketing</td>
                            </tr>
                        </thead>
                        <tbody>
                            {marketings.map((item, index) => (
                            <tr key={index} className="odd:bg-slate-200">
                                <td className="px-6 py-2">{index+1}</td>
                                <td className="px-6 py-2">{item.name}</td>
                            </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </Section>
        </Main>
    )
}
export default Home