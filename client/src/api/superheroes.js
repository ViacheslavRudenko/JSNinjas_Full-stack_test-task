import instance from "./axios";
export const getSuperheroes = async () => {
  const data = await instance.get(`/superheroes`);
  return data;
};

export const getSuperhero = async (id) => {
  const data = await instance.get(`/superheroes/${id}`);
  return data;
};
