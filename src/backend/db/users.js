import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profileSrc: "https://picsum.photos/100/100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: ["rishi"],
    following: ["rishi"],
    bookmarks: ["rishiPage"]
  },
  {
    _id: uuid(),
    firstName: "Saksham",
    lastName: "Ak",
    username: "sakshamak",
    password: "sakshamak",
    profileSrc: "https://picsum.photos/100/100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
