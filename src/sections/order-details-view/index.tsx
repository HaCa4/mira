import SectionContainer from "@/components/section-container/SectionContainer";
import PatientDetails from "./components/PatientDetails";

// ----------------------------------------------------------------------

const OrderDetailsView = () => {
  return (
    <SectionContainer title="Order Details">
      <PatientDetails />
    </SectionContainer>
  );
};

export default OrderDetailsView;
