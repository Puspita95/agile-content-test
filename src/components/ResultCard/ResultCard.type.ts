import { Animal } from "../../App.type";

export type ResultCardProp = {
  animal: Animal;
  onResultCardClick: (animal: Animal) => void;
};
