import Nav from "../components/nav"

/* eslint-disable react/prop-types */
const Main=(props) => {
    return(
    <div className="flex flex-col min-h-screen">
        <Nav/>
        <main>
            {props.children}
        </main>
    </div>
    )  
}
export default Main