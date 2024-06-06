// import { sample } from 'lodash';
// import { faker } from '@faker-js/faker';

// // ----------------------------------------------------------------------

// export const users = [...Array(24)].map((_, index) => ({
//   id: faker.string.uuid(),
//   avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.person.fullName(),
//   company: faker.company.name(),
//   isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'banned']),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer',
//   ]),
// }));

export const users = [
  {
    username: 'admin1',
    email: 'admin1@example.com',
    password: 'password123',
    role: {
      roleId: '1',
      roleName: 'Admin1',
    },
  },
  {
    username: 'admin2',
    email: 'admin2@example.com',
    password: 'password123',
    role: {
      roleId: '2',
      roleName: 'Admin2',
    },
  },
  {
    username: 'admin3',
    email: 'admin3@example.com',
    password: 'password123',
    role: {
      roleId: '3',
      roleName: 'Admin3',
    },
  },
  {
    username: 'admin4',
    email: 'admin4@example.com',
    password: 'password123',
    role: {
      roleId: '4',
      roleName: 'Admin4',
    },
  },
  {
    username: 'admin5',
    email: 'admin5@example.com',
    password: 'password123',
    role: {
      roleId: '5',
      roleName: 'Admin5',
    },
  },
  {
    username: 'admin6',
    email: 'admin6@example.com',
    password: 'password123',
    role: {
      roleId: '6',
      roleName: 'Admin6',
    },
  },
  {
    username: 'admin7',
    email: 'admin7@example.com',
    password: 'password123',
    role: {
      roleId: '7',
      roleName: 'Admin7',
    },
  },
  {
    username: 'admin8',
    email: 'admin8@example.com',
    password: 'password123',
    role: {
      roleId: '8',
      roleName: 'Admin8',
    },
  },
];


// export function addStaff(newStaffData) {
//   staff.push(newStaffData);
// }