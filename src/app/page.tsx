import { endPoints } from "@/utilities/endpoints";
import { getData } from "@/utilities/helpers/requestHelpers";
import OrderClientView from "@/sections";
import { NextPageContext } from "next";

// ----------------------------------------------------------------------

export default async function Home() {
  const result = await getData({}, null, null, endPoints.orderDetails);

  return (
    <main>
      <OrderClientView details={result.details} />
    </main>
  );
}
