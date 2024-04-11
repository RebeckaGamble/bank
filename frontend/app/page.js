import Nav from "./components/header/Nav";
import NavLinks from "./components/header/NavLinks";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="max-w-screen">
      <Nav navLinks={<NavLinks isLoggedIn={false} />} />
      <Hero />
      <div className="px-4 py-6 h-full xl:max-w-[90rem] xl:mx-auto">
        <h3 className="font-semibold pb-2">Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          labore a distinctio eos iste nesciunt ad velit deleniti! Sunt,
          officiis.
        </p>
      </div>
    </main>
  );
}
