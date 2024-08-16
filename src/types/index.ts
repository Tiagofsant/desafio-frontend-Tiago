export interface imageProps {
  imageUrl: string;
}

export interface ButtonIconProps {
  movieId: number;
}

export interface AuthorDescriptionProps {
  authorName: string;
  born: string;
  origin: string;
  about: string;
  imageUrl: string;
}

export interface CardCoverProps {
  content: {
    title: string;
    description: string;
    score: number;
    imageUrl: string;
    voteCount: number;
    genres: string | string[];
  };
}

export interface CardMoviesProps {
  content: {
    score?: number;
    title: string;
    imageUrl: string;
  }[];
}

export interface CardPictureProps {
  content: {
    personName: string;
    characterName?: string;
    imageUrl: string;
  }[];
}

export interface ContentWrapperProps {
  content: {
    label: string;
  }[];
}

export interface LabeledBadgeProps {
  title: string;
  subtitle?: string | string[];
}

export interface MediaCardProps {
  content: {
    imageUrl: string;
    title: string;
    score: number;
    director: string;
    year: number | string;
  }[];
}

export interface MovieDetailsProps {
  title: string;
  description: string;
  score: number;
  director: string;
  screenwriters: string[];
  artists: string[];
  voteCount: number;
}

export interface ScoreProps {
  score?: number;
}

export interface ScoreBadgeProps extends ScoreProps {
  noBadge?: boolean;
}

export interface Movie {
  id?: number;
  title?: string;
  backdrop_path?: string;
  vote_average?: number;
  vote_count?: number;
  overview?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieContent {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  genres: Genre[];
}

export interface Celebrity {
  id: number;
  name: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
  profile_path: string;
}
