import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CSU LAUTECH | Home" },
    { name: "description", content: "Welcome the Cherubim and Seraphim Unification LAUTECH chapter website" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline">CSU LAUTECH CHAPTER</h1>
    </div>
  );
}
