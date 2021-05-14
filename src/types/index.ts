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
  id: string;
  name: string;
  subjectId: string;
  punctuation: {
    maxNote: number;
    midNote: number;
    note: number;
  };
};
