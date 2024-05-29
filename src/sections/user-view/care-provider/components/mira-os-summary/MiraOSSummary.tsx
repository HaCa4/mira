import { useSnapshot } from "valtio";
import { state } from "@/store/store";
import styles from "./mira-os-summary.module.css";

// ----------------------------------------------------------------------

const MiraOSSummary = () => {
  const { dx, rxExplanation, rxRecommendation, reasonsForDx } = useSnapshot(state).details.miraOSsummary;

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        <strong>Mira AI</strong>
      </p>
      <p>
        <strong>Diagnosis: </strong>
        {dx[0].diagnosis}
      </p>
      <p>
        <strong>Probability: </strong> {dx[0].probability}
      </p>
      <p>
        <strong>ICD10CM Code: </strong> {dx[0].ICD10CMCode}
      </p>
      <p>
        <strong>Explanation: </strong> {rxExplanation}
      </p>
      <p>
        <strong>Recommended Rx: </strong>
      </p>
      <div className={styles.recommendations}>
        <ul>
          {rxRecommendation.map((rx) => (
            <li key={rx.name}>
              {rx.name}: {rx.dose}
            </li>
          ))}
        </ul>
      </div>
      <p>
        <strong>Reasons for Dx:</strong> {reasonsForDx}
      </p>
    </div>
  );
};

export default MiraOSSummary;
