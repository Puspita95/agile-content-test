import { useState, useEffect } from "react";
import { createAnimalsList } from "../util/data";
import { Animal } from "../App.type";

const useFetchAnimalList = () => {
  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getAnimalList = async () => {
      setIsLoading(true);
      try {
        const animalsList = await createAnimalsList();
        setAnimalList(animalsList);
      } catch (error: any) {
        setError(error);
        console.log("Error on fetching animalList", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAnimalList();
  }, []);
  return { animalList, isLoading, error };
};

export default useFetchAnimalList;
