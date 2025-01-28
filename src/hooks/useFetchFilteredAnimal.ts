import { useState, useEffect } from "react";
import { filterAnimals } from "../util/data";
import { Animal } from "../App.type";

const useFetchFilteredAnimal = (
  debouncedSearch: string,
  animalList: Animal[]
) => {
  const [filteredAnimalList, setFilteredAnimalList] = useState<Animal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getFilteredAnimals = async () => {
      if (!debouncedSearch) {
        setFilteredAnimalList([]);
        return;
      }
      if (debouncedSearch) {
        setIsLoading(true);
        try {
          const filtered = await filterAnimals(animalList, debouncedSearch);
          setFilteredAnimalList(filtered);
        } catch (error: any) {
          setError(error);
          console.error("Error on filtering animals:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getFilteredAnimals();
  }, [debouncedSearch, animalList]);
  return { filteredAnimalList, isLoading, error };
};

export default useFetchFilteredAnimal;
