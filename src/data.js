import myData from "./data.json";
export let myDataClone = myData;
export let organizationsArray = [];
export let membersArray = [];
export let membersOrganizations = {};
export let organizationMembers = {};
myDataClone.forEach((item) => {
  organizationsArray.push(item.organization.name);
  item.members.forEach((val) => {
    if (!membersArray.includes(val.name)) {
      membersArray.push(val.name);
      membersOrganizations[val.name] = [];
    }
  });

  item.members.forEach((val) => {
    membersOrganizations[val.name].push(item.organization.name);
  });

  let members = [];
  item.members.forEach((item) => members.push(item.name));
  organizationMembers[item.organization.name] = members;
});

export let membersOrganizationsArray = Object.entries(membersOrganizations);
export let organizationMembersArray = Object.entries(organizationMembers);
