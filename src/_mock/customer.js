import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const customer = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  address: faker.location.city(),
  point: faker.number.int({ min: 1, max: 100 }),
  status: sample(['active', 'banned']),
  phoneNumber: faker.phone.number(),
}));
