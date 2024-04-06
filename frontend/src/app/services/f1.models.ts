export interface Driver {
  driverId: string;
  permanentNumber?: string; // L'utilisation de '?' rend ces champs optionnels
  code?: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
