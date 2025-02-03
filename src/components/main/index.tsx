import About from "../about";
import Home from "../home";
import Blog from "../blog";
import Pages from "../contact";

const Main: React.FC = () => {
  return (
    <main className="z-10 w-full relative bg-black/80">
      <Home />
      <About />
      <Blog />
      <Pages />
    </main>
  );
};

export default Main;
