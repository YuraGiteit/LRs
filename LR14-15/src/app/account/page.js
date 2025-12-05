import Navigation from "../components/Navigation";

export const metadata = {
  title: "Account | The Wild Oasis",
};

export default function AccountPage() {
  return (
    <div className="px-8 py-6 space-y-4">
      <Navigation />
      <h1 className="text-3xl mt-6">Your account</h1>
      <p>Here will be reservations and profile pages in future steps.</p>
    </div>
  );
}
