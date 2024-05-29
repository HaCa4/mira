import { getTimeOfTheDayMorningOrAfternoon, getTimeZone, getToday } from "./helpers/timeHelpers";
import { IPatientDetails } from "./types/scriptTypes";

export const baseApiUrl = "http://localhost:3000";

//Patient History as it's not located in provided json
export const patientHistory = ["Last Visit Date: 01/06/2022", "Type: In-person", "Chief Complaint: Cough", "Treatment: Prescribed cough syrup"];

//Patient Information For Order Details Section
export const patientDetails: IPatientDetails[] = [
  {
    key: "Status",
    value: "Reviewing",
  },
  {
    key: "Member",
    value: "ryan.bruns",
  },
  {
    key: "Date of Birth",
    value: "01/01/1980",
  },
  {
    key: "Request Address",
    value: "98 St Marks Pl, New York, NY",
  },
  {
    key: "Received",
    value: "01/11/2022",
  },
  {
    key: "Intended Date",
    value: getToday(),
  },
  {
    key: "Requested Time of Day",
    value: getTimeOfTheDayMorningOrAfternoon(),
  },
  {
    key: "Assigned Agent",
    value: "Ryan Bruns",
  },
  {
    key: "Time Zone",
    value: getTimeZone(),
  },
];
