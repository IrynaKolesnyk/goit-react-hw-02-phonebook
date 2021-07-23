import styled from "styled-components";

const ContactListStyled = styled.ul`
  margin-top: 30px;
  .item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  p {
    display: inline-block;
    margin-right: 20px;
  }

  .name {
    color: #052f74;
    font-weight: 600;
    font-size: 20px;
  }

  .number {
    color: #202733;
    font-weight: 600;
    font-size: 17px;
  }

  .delBtn {
    display: block;
    margin-left: auto;
    padding: 5px;
    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid gray;
    border-radius: 5px;
    font-weight: 700;
    &:hover,
    &:focus {
      box-shadow: 1px 1px 2px 0 #0b2349;
    }
  }
`;

export default ContactListStyled;
