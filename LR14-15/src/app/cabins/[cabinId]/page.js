import { getCabin } from "../../lib/data-service";

export async function generateMetadata({ params }) {
  const { id } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${id} - Wild Oasis`,
  };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  const { id, name, description } = cabin;

  return (
    <div>
      <h1 className="text-3xl mb-4">{name}</h1>
      <p>{description}</p>
    </div>
  );
}
