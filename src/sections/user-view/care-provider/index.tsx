import { TreatmentPlan, ChiefCompliant, MiraOSSummary } from "./components";
import { Divider, ToggleOptions, ContentContainer } from "@/components";

// ----------------------------------------------------------------------

const CareProviderView = () => {
  return (
    <ContentContainer direction="column">
      <ChiefCompliant />
      <Divider />
      <MiraOSSummary />
      <Divider />
      <ToggleOptions />
      <Divider />
      <TreatmentPlan />
      <Divider />
    </ContentContainer>
  );
};

export default CareProviderView;
