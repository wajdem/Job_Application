import { useEffect } from "react";
import { useJopContext } from "../hooks/useJopContext";
import { useAuthContext } from "../hooks/useAuthContext";

//compoents
import JopDetails from "../components/JopDetails";
import Buttons from "../components/Buttons";

const Home = () => {
  const { jops, dispatch } = useJopContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchJops = async () => {
      const response = await fetch("/api/jop", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        dispatch({ type: "SET_JOPS", payload: json });
      }
    };

    if (user) {
      fetchJops();
    }
  }, [dispatch]);

  return (
    <>
      <Buttons />
      <div className="home">
        <div className="workouts">
          {jops && jops.map((jop) => <JopDetails key={jop.id} subject={jop} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
