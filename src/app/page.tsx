import MainVisual from "@/components/MainVisual/MainVisual";
import styles from "./page.module.css";
import Vision from "@/components/Vision/Vision";
import AboutUs from "@/components/AboutUs/AboutUs";
import OurService from "@/components/OurService/OurService";
import Company from "@/components/Company/Company";
import Contact from "@/components/Contact/Contact";
import Map from "@/components/Map/Map";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* MV */}
      <MainVisual />
      {/* Vision */}
      <Vision />
      {/* About Us */}
      <AboutUs />
      {/* Our Service */}
      <OurService />
      {/* Company */}
      <Company />
      {/* Contact */}
      <Contact />
      {/* Map */}
      <Map />
      {/* Footer */}
      <Footer />
    </div>
  );
}
