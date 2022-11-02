export interface Item {
  title: string,
  thumbnail: {
    trending?: {
      small: string,
      large: string,
    }
    regular: {
      small: string,
      medium: string,
      large: string,
    }
  },
  year: number,
  category: 'Movie' | 'TV Series',
  rating: 'E' | 'PG' | '18+',
  isTrending: boolean,
  isBookmarked: boolean,
  _id: string
}

export interface User {
  id: string,
  email: string,
  bookmarked: string[],
}
