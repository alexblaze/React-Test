let sessionName = "cart-mela";

export const setSession = (value) => {
  localStorage.setItem(sessionName, JSON.stringify(value));
};

export const getSession = () => {
  const data = localStorage.getItem(sessionName);
  if (data) return JSON.parse(data);
  return [];
};

export const removeSession = () => {
  localStorage.removeItem(sessionName);
};

export const setBasket = (value) => {
  localStorage.setItem("basketID", JSON.stringify(value));
};

export const getBasket = () => {
  const data = localStorage.getItem("basketID");
  if (data) return JSON.parse(data);
  return null;
};

export const removeBasket = () => {
  localStorage.removeItem("basketID");
};
