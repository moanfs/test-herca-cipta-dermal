/* eslint-disable react/prop-types */
const Section = ({children, sectionClassName = ""}) => {
    return(
        <div className={`xs:w-11/12 lg:w-2/3 mx-auto ${sectionClassName}`}>
            {children}
        </div>
    )
}
export default Section