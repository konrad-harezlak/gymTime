import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import '../assets/styles/excercies.scss';

function Exercises() {
  return (
    <div>
      <Header />
      <main className="exercises-page">
        <div className="exercises-page__exercise-category" id="first_img"><h1>Nogi</h1></div>
        <div className="exercises-page__exercise-category" id="second_img"><h1>Plecy</h1></div>
        <div className="exercises-page__exercise-category" id="third_img"><h1>Klata</h1></div>
        <div className="exercises-page__exercise-category" id="fourth_img"><h1>Barki</h1></div>
        <div className="exercises-page__exercise-category" id="fifth_img"><h1>Triceps</h1></div>
        <div className="exercises-page__exercise-category" id="sixth_img"><h1>Biceps</h1></div>
        <div className="exercises-page__exercise-category" id="seventh_img"><h1>Łydki</h1></div>
        <div className="exercises-page__exercise-category" id="eighth_img"><h1>Przedramie</h1></div>
      </main>
      <Footer />
    </div>
  );
}

export default Exercises;
