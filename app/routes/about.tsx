import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "CSU LAUTECH | About",
      description:
        "About page of the Cherubim and Seraphim Unification LAUTECH chapter",
    },
  ];
};

const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">About</h1>
    </div>
  );
};

export default About;
