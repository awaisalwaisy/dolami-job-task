import { HomeAside } from "components/home";

const HomePage: React.FC = () => {
  return (
    <article className="flex justify-between m-2">
      <aside className="w-64">
        <HomeAside />
      </aside>
      <main>main</main>
    </article>
  );
};

export default HomePage;
