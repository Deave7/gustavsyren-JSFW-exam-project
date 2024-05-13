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
  title: string;
  author: string;
  coverId: number;
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

export type User = {
  favoriteBooks: Book[];
  readBooks: Book[];
  reviews: Review[];
};

export type globalState = {
  docs: Book[];
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

export type Action =
  | { type: "SAVE_SEARCH"; payload: Book[] }
  | { type: "SAVE_FAVORITE"; payload: Book }
  | { type: "SAVE_READ"; payload: Book }
  | { type: "DELETE_FAVORITE"; payload: Book }
  | { type: "DELETE_READ"; payload: Book }
  | { type: "SAVE_REVIEW"; payload: Review }
  | { type: "DELETE_REVIEW"; payload: Book }
  | { type: "RESET"; }

export type GlobalProviderProps = {
  children: React.ReactNode;
};

export type CheckFunction = () => boolean;
