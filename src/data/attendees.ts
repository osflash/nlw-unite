import { faker } from '@faker-js/faker'

export const attendees = Array.from({ length: 212 }).map(() => {
  return {
    id: faker.number.int({ min: 10_000, max: 20_000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: faker.date.recent({ days: 30 }),
    checkedInAt: Math.random() > 0.3 ? faker.date.recent({ days: 7 }) : null
  }
})
