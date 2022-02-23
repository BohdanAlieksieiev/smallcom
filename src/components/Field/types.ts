export interface FieldPropsTypes {
  value: string;
  onChange: (eValue: string) => void;
  name: string;
  type?: string; // "text" | "password"
  label?: string;
  cssInput?: string;
  cssLabel?: string;
  cssField?: string;
}
