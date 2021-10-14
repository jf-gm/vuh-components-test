export interface imgInterface {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}