export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorPosition: string;
  authorAvatar: string;
  isVerified: boolean;
  time: string;
  visibility: 'Official' | 'Division' | 'District' | 'Thana' | 'Public';
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'document';
  isPinned?: boolean;
  isAnnouncement?: boolean;
  pollOptions?: { text: string; votes: number }[];
  reactions: {
    like: number;
    love: number;
    support: number;
    celebrate: number;
    insightful: number;
    important: number;
  };
  commentsCount: number;
  sharesCount: number;
  commentsList: {
    id: string;
    author: string;
    avatar: string;
    time: string;
    text: string;
  }[];
}

export const DUMMY_POSTS: Post[] = [
  {
    id: 'post-101',
    authorId: 'PPN-2026-1000',
    authorName: 'Abdur Rahman',
    authorPosition: 'Central President',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    isVerified: true,
    time: '2 hours ago',
    visibility: 'Official',
    content: '🚨 OFFICIAL CIRCULAR: All Division & District Presidents are instructed to prepare the 2026 Grassroots Membership Drive Report before August 15. Ensure full digital verification via NID & Face Recognition.',
    mediaUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    mediaType: 'image',
    isPinned: true,
    isAnnouncement: true,
    reactions: { like: 1240, love: 430, support: 890, celebrate: 150, insightful: 310, important: 950 },
    commentsCount: 142,
    sharesCount: 88,
    commentsList: [
      { id: 'c1', author: 'Md Hasan Mahmud', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', time: '1 hour ago', text: 'Received instruction. Dhaka Division is working at full capacity.' },
      { id: 'c2', author: 'Sultana Razia', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', time: '30 mins ago', text: 'Chattogram unit has completed 85% of ward member registrations.' }
    ]
  },
  {
    id: 'post-102',
    authorId: 'PPN-2026-1002',
    authorName: 'Saiful Islam',
    authorPosition: 'Dhaka Division Organizer',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    isVerified: true,
    time: '4 hours ago',
    visibility: 'Division',
    content: '📊 Poll for upcoming Youth Training Workshop location in Dhaka Division. Please cast your vote!',
    pollOptions: [
      { text: 'Keraniganj Central Hall', votes: 420 },
      { text: 'Gazipur Auditorium', votes: 310 },
      { text: 'Savar Convention Center', votes: 210 }
    ],
    reactions: { like: 540, love: 120, support: 340, celebrate: 80, insightful: 90, important: 200 },
    commentsCount: 64,
    sharesCount: 19,
    commentsList: []
  }
];
