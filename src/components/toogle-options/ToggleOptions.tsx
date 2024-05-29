import { useSnapshot } from "valtio";
import { state } from "@/store/store";

import Button from "@/components/button/Button";

import { useBoolean } from "@/hooks/useBoolean";

import { IOTCItem, IVisitIntakeItem } from "@/utilities/types/dbTypes";
import { EColorOptions } from "@/utilities/types/componentTypes";
import { patientHistory } from "@/utilities/scripts";
import styles from "./toggle-options.module.css";

// ----------------------------------------------------------------------

const ToggleOptions = ({ isNavigator }: { isNavigator?: boolean }) => {
  const { visitIntake, miraOSsummary, selfCareTips, OTC } = useSnapshot(state).details;

  const diagnostic = useBoolean();
  const careTips = useBoolean();
  const intake = useBoolean();
  const patientHistory = useBoolean();

  const otcArray = [...OTC];

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        {isNavigator && <Button variant="outlined" title="Diagnostic" color={EColorOptions.BLACK} onClick={diagnostic.onToggle} />}
        {isNavigator && <Button variant="outlined" title="Self Care tips" color={EColorOptions.BLACK} onClick={careTips.onToggle} />}
        <Button variant="outlined" title="Intake" color={EColorOptions.BLACK} onClick={intake.onToggle} />
        <Button variant="outlined" title="Patient History" color={EColorOptions.BLACK} onClick={patientHistory.onToggle} />
      </div>
      <div className={styles.content}>
        {diagnostic.value && <Diagnostic diagnosis={miraOSsummary.dx[0].diagnosis} />}
        {careTips.value && <SelfCareTips selfCareTips={selfCareTips} OTC={otcArray} />}
        {intake.value && <Intake visitIntake={visitIntake.slice(1)} />}
        {patientHistory.value && <PatientHistory />}
      </div>
      <div className={styles.actionButtons}>
        <Button variant="contained" title="Send Care Options" color={EColorOptions.BLUE} onClick={() => console.log("send")} />
        <Button variant="contained" title="Cancel Order" color={EColorOptions.RED} onClick={() => console.log("cancel")} />
      </div>
    </div>
  );
};

export default ToggleOptions;

// ----------------------------------------------------------------------

const Diagnostic = ({ diagnosis }: { diagnosis: string }) => {
  return <p className={styles.paragraph}>{diagnosis}</p>;
};

// ----------------------------------------------------------------------

const SelfCareTips = ({ selfCareTips, OTC }: { selfCareTips: string; OTC: IOTCItem[] }) => {
  return (
    <>
      <p className={styles.paragraph}>{selfCareTips}</p>
      {OTC.map((otc, index) => (
        <p key={index} className={styles.paragraph}>
          {otc.name}: {otc.type}, {otc.dose}
          {otc.dose !== otc.frequency && ", " + otc.frequency}
        </p>
      ))}
    </>
  );
};

// ----------------------------------------------------------------------

const Intake = ({ visitIntake }: { visitIntake: IVisitIntakeItem[] }) => {
  return (
    <>
      {visitIntake.map((intake, index) => (
        <p key={index} className={styles.paragraph}>
          {intake.title}: {intake.value}
        </p>
      ))}
    </>
  );
};

// ----------------------------------------------------------------------

const PatientHistory = () => {
  return (
    <>
      {patientHistory.map((info, index) => (
        <p key={index} className={styles.paragraph}>
          {info}
        </p>
      ))}
    </>
  );
};
