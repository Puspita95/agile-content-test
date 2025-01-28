import { faker } from "@faker-js/faker";

export const createAnimalsList = () => {
  const data = [...new Array(100)].map((item, index) => {
    const type = faker.animal.type();
    const animal = faker.animal[type]();
    return {
      id: index + 1,
      type: type,
      url: faker.internet.url(),
      name: animal,
      description: faker.lorem.sentences(),
      image: faker.image.animals(644, 362, true),
    };
  });
  return data;
};
export const filterAnimals = async (animals, searchInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filtered = animals.filter(
        (animal) =>
          animal.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          animal.type.toLowerCase().includes(searchInput.toLowerCase())
      );
      resolve(filtered);
    }, 2000);
  });
};
