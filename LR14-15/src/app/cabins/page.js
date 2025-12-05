import { Suspense } from "react";
import CabinsList from "../components/CabinsList";
import Spinner from "../components/Spinner";

export const metadata = {
  title: "Cabins | Wild Oasis",
};

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <CabinsList />
    </Suspense>
  );
}
