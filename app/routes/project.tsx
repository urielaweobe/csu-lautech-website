import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "CSU LAUTECH | Renovation Project",
      description: "Church renovation page",
    },
  ];
};

const Project: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Renovation Project</h1>
    </div>
  );
};

export default Project;
