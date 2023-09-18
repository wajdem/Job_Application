//compoents
import Jops from "../components/Jops";
import Buttons from "../components/Buttons";

const Home = () => {

  return (
    <>
      <Buttons />
      <div className="home">
        <div className="workouts">
          <Jops/>
        </div>
      </div>
    </>
  );
};

export default Home;
