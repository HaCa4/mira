import { Information } from "../care-navigator/components";

import { Divider, ToggleOptions, ContentContainer } from "@/components";

// ----------------------------------------------------------------------

const CareNavigatorView = () => {
  return (
    <ContentContainer direction="column">
      <Information />
      <Divider />
      <ToggleOptions isNavigator />
    </ContentContainer>
  );
};

export default CareNavigatorView;
