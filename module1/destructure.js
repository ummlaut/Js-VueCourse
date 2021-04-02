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