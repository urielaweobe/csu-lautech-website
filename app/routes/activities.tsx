import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "CSU LAUTECH | Activities",
      description: "Activities and announcements page",
    },
  ];
};

const Activities: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Activities</h1>
    </div>
  );
};

export default Activities;
