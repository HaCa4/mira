import CareNavigatorView from "./care-navigator";
import CareProviderView from "./care-provider";

import { Button, Chat, SectionContainer } from "@/components";

import { useBoolean } from "@/hooks/useBoolean";

import { EColorOptions } from "@/utilities/types/componentTypes";
import { EUserTypes } from "@/utilities/types/scriptTypes";

// ----------------------------------------------------------------------

const UserView = () => {
  const isCareNavigator = useBoolean();

  const title = isCareNavigator.value ? "Care " + EUserTypes.CareNavigator : EUserTypes.CareProvider;

  const buttonTitle = !isCareNavigator.value ? EUserTypes.CareNavigator : EUserTypes.CareProvider;

  const content = isCareNavigator.value ? <CareNavigatorView /> : <CareProviderView />;

  return (
    <SectionContainer title={title} button={<Button variant="contained" color={EColorOptions.GRAY} title={`Switch to ${buttonTitle}`} onClick={isCareNavigator.onToggle} />}>
      {content}

      <Chat />
    </SectionContainer>
  );
};

export default UserView;
