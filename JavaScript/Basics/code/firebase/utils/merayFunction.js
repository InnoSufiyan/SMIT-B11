const getNameFromEmail = (user) => {
  return (
    user.email.split("@")[0].slice(0, 1).toUpperCase() +
    user.email.split("@")[0].slice(1).toLowerCase()
  );
};

export { getNameFromEmail };
