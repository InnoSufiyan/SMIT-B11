const data = [
  {
    id: 1,
    title: "andheri raat",
    author: "Tanzeel",
  },
  {
    id: 2,
    title: "5000 huwey qurban",
    author: "umer farooq",
  },
  {
    id: 3,
    title: "meri shadi honey wali hai",
    author: "younus dulha",
    timeOfShadi: {
      month: "December",
      year: 2024,
    },
  },
];

export function getAllData() {
  return data;
}

export function getSingleData(id) {
  return data.find((singleData) => singleData.id == id);
}
