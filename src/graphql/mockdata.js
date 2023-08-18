const getFakeData = path => {

  const pathParams = path.split("/");

  switch (pathParams[1]) {
    case "customers":
      return customers;
    case "customer":
      const id = pathParams[2];
      return customers[id];
    default:
      throw new Error("Path not found");
  }
};

const customers = [
  {
    id: 0,
    firstName: "Rui",
    lastName: "Peixoto",
    invitedBy: "CORE",
    vin: "VWDS123321",
    invitationCode: "1234"
  },
  {
    id: 1,
    firstName: "Pedro",
    lastName: "Rodrigues",
    invitedBy: "CORE",
    vin: "VWDS098890",
    invitationCode: "4567"
  },
  {
    id: 2,
    firstName: "Ricardo",
    lastName: "Damasceno",
    invitedBy: "CORE",
    vin: "VWDS876678",
    invitationCode: "8901"
  },
  {
    id: 3,
    firstName: "Rodrigo",
    lastName: "Caetani",
    invitedBy: "Next-Gen",
    vin: "VWDS123321",
    invitationCode: "1209"
  },
  {
    id: 4,
    firstName: "Thiago",
    lastName: "Camilo",
    invitedBy: "Next-Gen",
    vin: "VWDS098890",
    invitationCode: "3498"
  },
  {
    id: 5,
    firstName: "Carla",
    lastName: "Marreiros",
    invitedBy: "Next-Gen",
    vin: "VWDS876678",
    invitationCode: "5687"
  }
];

export { getFakeData };
