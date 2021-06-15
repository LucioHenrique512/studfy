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
  description?: string;
  punctuation: {
    maxNote: number;
    midNote: number;
    note: number;
  };
};

export type ActivityType = {
  id: string;
  name: string;
  subjectId: string;
  subjectName: string;
  description: string;
  finished?: boolean;
  finishDate: string;
  punctuation: {
    maxNote: number;
    midNote: number;
    note: number;
  };
};

export const InitActivityValue = {
  id: "",
  name: "",
  subjectId: "",
  subjectName: "",
  description: "",
  finishDate: "",
  punctuation: {
    maxNote: 0,
    midNote: 0,
    note: 0,
  },
};
