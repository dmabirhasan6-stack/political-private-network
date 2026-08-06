export interface IdentityCard {
  memberId: string;
  fullName: string;
  position: string;
  division: string;
  district: string;
  thana: string;
  union: string;
  ward: string;
  bloodGroup: string;
  nidVerified: boolean;
  faceMatchScore: number;
  qrCodeUrl: string;
  barcodeUrl: string;
  issueDate: string;
  status: 'Active' | 'Pending' | 'Suspended';
}

export const CURRENT_DIGITAL_ID: IdentityCard = {
  memberId: 'PPN-2026-88492',
  fullName: 'Abdur Rahman',
  position: 'Ward Secretary',
  division: 'Dhaka Division',
  district: 'Dhaka District',
  thana: 'Keraniganj',
  union: 'Kolatia Union',
  ward: 'Ward 01',
  bloodGroup: 'O+',
  nidVerified: true,
  faceMatchScore: 98,
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PPN-2026-88492',
  barcodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x50&data=PPN-2026-88492',
  issueDate: '2026-08-01',
  status: 'Active'
};
