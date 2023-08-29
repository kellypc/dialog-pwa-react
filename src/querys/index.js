import { gql } from "@apollo/client";

const INFO_USER = gql`
  query {
    user {
      id
      index
      name
      phone
      picture
      age
      company
      email
      eyeColor
      friends {
        age
        company
        email
        eyeColor
        id
        index
        name
        phone
        picture
        }
      greeting
    }
  }
`;

export default INFO_USER;