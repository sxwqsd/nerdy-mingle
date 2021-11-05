const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'ioyu',
    email: 'ioyufgiops@beepster.com',
    password: 'password123'
  },
  {
    username: 'njm',
    email: 'njm@beepster.com',
    password: 'password123'
  },
  {
    username: 'njmk',
    email: 'njmk@beepster.com',
    password: 'password123'
  },
  {
    username: 'yhu',
    email: 'yhujm@beepster.com',
    password: 'password123'
  },
  {
    username: 'rruipp',
    email: 'rruipp@beepster.com',
    password: 'password123'
  },
  {
    username: 'mhgujdaga',
    email: 'asga@beepster.com',
    password: 'password123'
  },
  {
    username: 'mpeyuioer',
    email: 'hhajfk@beepster.com',
    password: 'password123'
  },
  {
    username: 'toteline',
    email: 'pastasauce@beepster.com',
    password: 'password123'
  },
  {
    username: 'mchase8',
    email: 'jpmorganchase8@beepster.com',
    password: 'password123'
  },
  {
    username: 'jimmy',
    email: 'thejimster@beepster.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
