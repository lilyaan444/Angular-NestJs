export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code?: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  imageUrl: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
  logoUrl: string;
}

export interface User {
  login: string;
  password: string;
}

export interface Form {
  login: string;
  password: string;
}