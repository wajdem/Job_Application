// import { useEffect } from "react";
// import { useJopContext } from "../hooks/useJopContext";
// import { useAuthContext } from "../hooks/useAuthContext";

//compoents
import Jops from "../components/Jops";
import Buttons from "../components/Buttons";

const Home = () => {
  // const { jops, dispatch } = useJopContext();
  // const { user } = useAuthContext();

  // useEffect(() => {
  //   const fetchJops = async () => {
  //     const response = await fetch("/api/jop", {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     const json = await response.json();
  //     console.log(json);

  //     if (response.ok) {
  //       dispatch({ type: "SET_JOPS", payload: json });
  //     }
  //   };

  //   if (user) {
  //     fetchJops();
  //   }
  // }, [dispatch]);

  return (
    <>
      <Buttons />
      <div className="home">
        <div className="workouts">
          {/* {jops && jops.map((jop) => <Jops key={jop.id} subject={jop} />)} */}
          <Jops/>
        </div>
      </div>
    </>
  );
};

export default Home;
