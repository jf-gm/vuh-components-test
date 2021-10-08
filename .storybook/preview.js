import { defineCustomElements } from '../dist/loader';
import '../css/global.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}