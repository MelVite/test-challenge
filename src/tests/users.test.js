// You already have the methods imported
//import { default as expect } from "expect";
//import { getUser, getUsers } from "../users";

const users = require("..data/");
const { getUsers, getUser } = require("../users");

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

describe('getUser', () => {
    it('It should retrieve the correst user for a given ID', () => {
        const user = user[0];
        expect(getUser(1)).toEqual(user);
    });
});

// READ documentation

