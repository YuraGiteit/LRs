import Navigation from "../components/Navigation";

export const metadata = {
  title: "About | The Wild Oasis",
};

export default function AboutPage() {
  return (
    <div className="px-8 py-6 space-y-4">
      <Navigation />
      <h1 className="text-3xl mt-6">About the hotel</h1>
      <p>
        The Wild Oasis is a modern, cozy hotel in the mountains. Guests can
        explore cabins, manage reservations and enjoy nature.
      </p>
    </div>
  );
}
