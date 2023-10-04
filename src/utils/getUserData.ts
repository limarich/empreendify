export interface UserDataProps {
  name: string;
  email: string;
  phone: string;
  created_at: Date;
  businesses: Business[];
}

export interface Business {
  id: string;
  name: string;
  phone: string;
  website: null;
  userId: string;
  addressId: null;
}

export const getUserData = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "");
  return userData as UserDataProps;
};
