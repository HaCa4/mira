import { useSnapshot } from "valtio";
import { state } from "@/store/store";
import styles from "./treatment-plan.module.css";

// ----------------------------------------------------------------------

const TreatmentPlan = () => {
  const { selfCareTips, miraOSsummary } = useSnapshot(state).details;
  const { rxRecommendation, chiefComplaint } = miraOSsummary;

  const defaultComplaintValue = chiefComplaint;
  const defaultRxValue = rxRecommendation.map((rx) => `${rx.name}: ${rx.dose} (${rx.instruction})`).join(", ");
  const defaultCareTipsValue = selfCareTips;

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        <strong>Treatment Plan</strong>
      </p>
      <p className={styles.provider}>
        <strong>Provider Name: </strong>
        Ozita Cooper, MD
      </p>
      <div className={styles.textareas}>
        <textarea id="compliant" defaultValue={defaultComplaintValue} className={styles.textarea} />
        <textarea id="rx" defaultValue={defaultRxValue} className={styles.textarea} />
        <textarea id="careTips" defaultValue={defaultCareTipsValue} className={styles.textarea} />
      </div>
    </div>
  );
};

export default TreatmentPlan;
