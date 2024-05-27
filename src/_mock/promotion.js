import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const promotion = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  type: sample(['Type1', 'Type2', 'Type3']),
  ApproveManager: faker.person.fullName(),
  Description: faker.lorem.sentence(),
  DiscountRate: faker.datatype.number({ min: 1, max: 100 }),
  StartDate: faker.date.future().toISOString().split('T')[0],
  EndDate: faker.date.future().toISOString().split('T')[0]
}));

