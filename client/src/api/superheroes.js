import instance from "./axios";
export const getSuperheroes = async () => {
  const data = await instance.get(`/superheroes`);
  return data;
};
