import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Watch } from "./components/Watch";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { Employees } from "./components/Employees";
import { InputDemo1 } from "./components/input/InputDemo1";
import { InputDemo2 } from "./components/input/InputDemo2";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { ErrorNotFound } from "./components/ErrorNotFound";

function App() {
  return (
    <div style={styles.app}>
      <Navbar />

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/netflixhome" element={<NetflixHome />} />
          <Route path="/netflixmovies" element={<NetflixMovies />} />
          <Route path="/netflixshows" element={<NetflixShows />} />
          <Route path="/watch/:name" element={<Watch />} />

          <Route path="/usestatedemo1" element={<UseStateDemo1 />} />
          <Route path="/usestatedemo2" element={<UseStateDemo2 />} />
          <Route path="/usestatedemo3" element={<UseStateDemo3 />} />
          <Route path="/fundemo1" element={<FunctionDemo1 />} />

          <Route path="/employees" element={<Employees />} />

          <Route path="/inputdemo1" element={<InputDemo1 />} />
          <Route path="/inputdemo2" element={<InputDemo2 />} />

          <Route path="/formdemo1" element={<FormDemo1 />} />
          <Route path="/formdemo2" element={<FormDemo2 />} />
          <Route path="/formdemo3" element={<FormDemo3 />} />
          <Route path="/formdemo4" element={<FormDemo4 />} />

          <Route path="/*" element={<ErrorNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
  },
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
};

export default App;
