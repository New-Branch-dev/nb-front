export type School = {
  code: string;
  name: string;
  type: string;
  address: string;
};

export type SchoolSearchResponse = {
  schools: School[];
};
