export interface VerificationApplication {
  id: string;
  applicantName: string;
  fatherName: string;
  mobile: string;
  nid: string;
  division: string;
  district: string;
  thana: string;
  appliedPosition: string;
  nidStatus: 'Verified' | 'Pending' | 'Rejected';
  faceMatchPercent: number;
  otpStatus: 'Verified' | 'Pending';
  status: 'Pending Review' | 'Approved' | 'Rejected' | 'Needs Revision';
  appliedDate: string;
}

export const DUMMY_APPLICATIONS: VerificationApplication[] = [
  {
    id: 'APP-2026-901',
    applicantName: 'Tariqul Islam',
    fatherName: 'Late Rahim Islam',
    mobile: '+880 1712-345678',
    nid: '19882691029384',
    division: 'Dhaka Division',
    district: 'Dhaka District',
    thana: 'Keraniganj',
    appliedPosition: 'Thana President',
    nidStatus: 'Verified',
    faceMatchPercent: 97,
    otpStatus: 'Verified',
    status: 'Pending Review',
    appliedDate: '2026-08-05'
  },
  {
    id: 'APP-2026-902',
    applicantName: 'Nusrat Jahan',
    fatherName: 'Late M. A. Jabbar',
    mobile: '+880 1819-876543',
    nid: '19922695847321',
    division: 'Chattogram Division',
    district: 'Chattogram District',
    thana: 'Patiya',
    appliedPosition: 'Union President',
    nidStatus: 'Verified',
    faceMatchPercent: 99,
    otpStatus: 'Verified',
    status: 'Approved',
    appliedDate: '2026-08-04'
  }
];
