export interface IDiagnosticItem {
  name: string;
  code: string;
}

export interface IOTCItem {
  name: string;
  type: string;
  dose: string;
  frequency: string;
}

export interface IMiraCareOptionsItem {
  careType: string[];
  active: string[];
  description: string;
}

export interface IDxItem {
  diagnosis: string;
  probability: string;
  ICD10CMCode: string;
}

export interface IRxRecommendationItem {
  name: string;
  type: string;
  dose: string;
  instruction: string;
}

export interface IVisitIntakeItem {
  request?: string;
  title: string;
  value: string;
}

export interface IOrderDetailsResult {
  summary: string;
  diagnostic: Array<IDiagnosticItem>;
  selfCareTips: string;
  OTC: Array<IOTCItem>;
  miraCareOptions: Array<IMiraCareOptionsItem>;
  miraOSsummary: {
    triageLevel: string[];
    chiefComplaint: string;
    dx: Array<IDxItem>;
    reasonsForDx: string;
    conditionCategory: string;
    rxRecommendation: Array<IRxRecommendationItem>;
    rxExplanation: string;
  };
  visitIntake: Array<IVisitIntakeItem>;
}
