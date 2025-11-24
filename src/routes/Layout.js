import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Wall from "../components/wall/Wall";
// import WallB from "../components/wall/WallB";
import "./LayoutStyles.css";

function Layout() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://m.media-amazon.com/images/I/61bexvVc+xL.jpg"
        title="Layout Page"
        btnClass="hide"
      />
      {/* <Wall />
      <WallB /> */}
      <div className="layout-container">
        <div className="layout-box">
          <h1 style={{ marginTop: "2%" }}>
            {" "}
            What Are You Waiting For Lets Dive Into The World Of Towels!
          </h1>
          <h3 style={{ marginTop: "4%", marginBottom: "3%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            vitae repellat assumenda quam ab ratione enim! Laboriosam quasi
            veniam ipsa in corporis. Odit ullam quos voluptatem earum debitis
            illum assumenda velit, ut nesciunt. Numquam nesciunt reprehenderit
            aliquam amet provident debitis? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Architecto vitae repellat assumenda
            quam ab ratione enim! Laboriosam quasi veniam ipsa in corporis. Odit
            ullam quos voluptatem earum debitis illum assumenda velit, ut
            nesciunt. Numquam nesciunt reprehenderit aliquam amet provident
            debitis?
          </h3>
        </div>
        <a
          href="/columnsA"
          style={{ textDecoration: "none" }}
          className="link-65"
        >
          Lets Explore!
        </a>
      </div>
      <Footer />
    </>
  );
}
export default Layout;
