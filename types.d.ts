interface Book {
  id: number;
  title: strng;
  author: strng;
  genre: strng;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: strng;
  coverColor: strng;
  coverUrl: strng;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}
