import instance from "./axios";

export const getSuperheroes = async (filter = "") => {
  const data = await instance.get(`${filter}`);
  return data;
};

export const getSuperhero = async (id) => {
  const data = await instance.get(`/superheroes/superhero${id}`);
  return data;
};

export const delleteSuperhero = async (id) => {
  const data = await instance.delete(`/superheroes/${id}`);
  return data;
};

export const addNewSuperhero = async (superhero) => {
  const data = await instance.post(`/add-superhero`, superhero);
  return data;
};

export const updateSuperhero = async (id, superhero) => {
  const data = await instance.put(`/superheroes/${id}`, superhero);
  return data;
};
