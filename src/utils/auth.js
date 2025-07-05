
export const getToken = () => localStorage.getItem("token");

export const getUser = () => {
  let user ={
    1:{
      name: "Sumit Bhukal",
      email: "sumitbhukal007@gmail.com"
    },
    2:{
      name: "Sahil",
      email: "sumitbhukal420@gmail.com"
    },
  };
  // console.log(user)
  
  try {
    return user;
  } catch {
    return null;
  }
};

export const isAdmin = () => {
  const user = getUser();
  return user?.email === "sumitbhukal007@gmail.com"; 
};
