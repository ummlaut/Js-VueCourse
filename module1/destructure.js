// 1
function allIn(first, ...other) {
  const firstArg = first;
  const [...otherArgs] = other;
  const obj = { first: firstArg, other: otherArgs };
  return obj;
}

allIn("d", "e", "r", "a");

/*prepod solution: 

function allIn(first, ...other) {
  return { first, other };
}

*/

//2

const organization = {
  name: "Google",

  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

function getInfo({
  name: name = "Unknown",
  info: {
    employees: [...employees],
    partners: [...partners],
  },
}) {
  console.log(name);
  console.log(partners[0], partners[1]);
}

getInfo(organization);

/*prepod solution

const organisation = {
  name: 'Google',
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
};

function getInfo(
  {
    name = 'Unknow',
    info: { partners: [first = 'none', second = 'none'] = [] } = {}
  } = {}
) {
  console.log(`Name: ${name}`);
  console.log(`Partners: ${first}, ${second}`);
}

getInfo(organisation)
getInfo()
*/

//3
let user = {
  guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
  isActive: false,
  balance: "$2,474.46",
  age: 30,
  eyeColor: "blue",
  name: "Tameka Maxwell",
  gender: "female",
  company: "ENOMEN",
  email: "tamekamaxwell@enomen.com",
  phone: "+1 (902) 557-3898",
  tags: ["aliquip", "anim", "exercitation", "non"],
  friends: [
    {
      id: 0,
      name: "Barber Hicks",
    },
    {
      id: 1,
      name: "Santana Cruz",
    },
    {
      id: 2,
      name: "Leola Cabrera",
    },
  ],
};

const {
  name = "",
  email = "",
  balance = "",
  tags: [firstTag = "", , , lastTag = ""] = [],
  friends: [{ name: friendName = "" }] = [],
} = user;

//4
const newArr = [...user.tags, ...user.friends];