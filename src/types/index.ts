export type UserType = {
  email?: string;
  name?: string;
  photo?: string;
  uid?: string;
};

export type SubjectType = {
  id: string;
  name: string;
  abbreviatedName: string;
  punctuation: {
    maxNote: number;
    midNote: number;
    note: number;
  };
};

export type ActivityType = {
  id: "activiteidunico1";
  name: "Atividade avaliativa A1";
  subjectId: "unico";
  punctuation: {
    maxNote: 20;
    midNote: 10;
    note: 12;
  };
};
