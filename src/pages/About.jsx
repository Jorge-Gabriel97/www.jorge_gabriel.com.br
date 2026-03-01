import Header from "../componets/Header/Header";
import Banner from "../componets/Banner/Banner";
import AboutDescription from "../componets/AboutDescripition/AboutDescription";
import Footer from "../componets/Footer/Footer";

function About() {
    return (
        <>
        <Header />   
            <Banner title="Sobre mim" image="About.png" />     
            <div className="container">                
            <AboutDescription />
            </div>
            <Footer />
        </>        
    )
}

export default About