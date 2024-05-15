import { ChangeEvent } from "react";

export type ButtonProps = {
  label?: string;
  className: string;
  onClick: () => void;
  toggleAble?: boolean;
  checkFavorite?: () => boolean;
  checkRead?: () => boolean;
};

export type CardProps = {
  itemName: string;
  authorOrTopWork: string;
  pictureId: number | undefined
};

export type CardListProps = {
  label: string;
  height: string;
  width: string;
  loading?: boolean
};

export type Book = {
  author_name: string[];
  title: string;
  cover_i: number;
  first_publish_year: number;
  publisher: string;
  first_sentence: string;
  key: string;
  _version_: number;
};

export type Author = {
  name: string
  top_work: string
  key: string
  _version_: number;
}

export type User = {
  favoriteBooks: Book[];
  readBooks: Book[];
  reviews: Review[];
  favoriteAuthors: Author[];
};

export type globalState = {
  docs: (Book | Author)[];
  user: User;
};

export type Review = {
  scoreValue: string;
  numPageValue: string;
  review: string;
  _version_: number;
};

export type HeaderProps = {
  navOne: string;
  imageOne: string;
  navTwo: string;
  imageTwo: string;
  label: string;
};

export type InputProps = {
  input: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className: string;
  minValue?: number;
  maxValue?: number;
  name?: string;
};

export type ModalProps = {
  onClose: () => void;
};

export type ItemType = 'favoriteBooks' | 'readBooks' | 'reviews' | 'favoriteAuthors';

export type Action =
  | { type: "SAVE_SEARCH"; payload: Book[] | Author[] }
  | { type: "SAVE_ITEM"; payload: { item: Book | Author | Review, type: ItemType }}
  | { type: "DELETE_ITEM"; payload: { item: Book | Author | Review, type: ItemType }}
  | { type: "RESET"; }

export type GlobalProviderProps = {
  children: React.ReactNode;
};

export type CheckFunction = () => boolean;

export type itemDetails = {
  subjects?: string[]
  death_date?: string
  birth_date?: string
  description?: string | {
    value: string;
  }
  bio?: string | {
    value: string
  }
  photos: string[]
  
}
