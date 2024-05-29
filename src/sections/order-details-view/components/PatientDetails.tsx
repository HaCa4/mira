import ContentContainer from "@/components/content-container/ContentContainer";
import { patientDetails } from "@/utilities/scripts";
import styles from "./patient-details.module.css";

// ----------------------------------------------------------------------

const PatientDetails = () => {
  const middleIndex = Math.floor(patientDetails.length / 2);

  return (
    <ContentContainer direction="row">
      <div className={styles.column}>
        {patientDetails.slice(0, middleIndex).map((detail) => (
          <p key={detail.key} className={styles.detail}>
            <strong>{detail.key}: </strong>
            {detail.value}
          </p>
        ))}
      </div>
      <div className={styles.column}>
        {patientDetails.slice(middleIndex).map((detail) => (
          <p key={detail.key} className={styles.detail}>
            <strong>{detail.key}: </strong>
            {detail.value}
          </p>
        ))}
      </div>
    </ContentContainer>
  );
};

export default PatientDetails;
