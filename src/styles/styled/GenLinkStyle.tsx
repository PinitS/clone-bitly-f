import styled from 'styled-components';

export const BodyCard = styled.div`
  background-color: #EC9F44;
  padding: 60px 0;
  p {
    margin: 0;
  }
`;

export const InputGenLink = styled.div`
  display: flex;
  input {
    border: none;
    width: 80%;
    padding: 8px 15px;
    border-radius: 6px;
    align-self: center;
    line-height: 35px;
    &:focus {
      outline: 0;
    }
  }
  button {
    background: #F25D09;
    border-radius: 10px;
    padding: 12px;
    border: none;
    color: #fff;
    font-size: 18px;
    width: 20%;
    margin-left: 30px;
    transition: background 100ms linear;
    &:hover {
      background: #db4f00;
    }
  }
  @media (max-width: 576px) {
    display: block;
    input {
      width: 100%;
    }
    button {
      width: 100%;
      margin-top: 20px;
      margin-left: 0px;
    }
`;

export const PolicyText = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 40px;
  color: #F2F2F2;
  text-align: center;
  @media (max-width: 576px) {
    line-height: 20px;
    padding: 15px;
  }
`;

export const ShortLinks = styled.div`
  border-radius: 10px;
  width: 100%;
  border: none;
  position: relative;
    background-color: #fff;
`;

// export const Customize = styled.div`
// padding: 0 15px;
//   justify-content: space-between;
//   background: #EEF2FD;
//   border-radius: 0px 0px 10px 10px;
//   height: 75px;
//   display: flex;
//   align-items: center;
//   color: #4F4F4F;
//   font-size: 20px;
//   button {
//     background: #F25D09;
//     border-radius: 10px;
//     font-size: 16px;
//     color: #fff;
//     border: none;
//     padding: 8px 20px;
//     &:hover {
//       background: #db4f00;
//     }
//   }
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
//   @media (max-width: 576px) {
//     padding: 20px;
//     display: block;
//     text-align: center;
//     height: auto;
//     background: #fff;
//     button {
//       width: 100%;
//       margin-top: 10px;
//     }
//   }
// `;

export const LinkUrl = styled.div`
  padding: 0 15px;
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75%;
  }
  button {
    background: rgba(255, 138, 0, 0.3);
    border-radius: 10px;
    font-size: 16px;
    color: #FF8A00;
    border: none;
    padding: 8px 20px;
    &:hover {
      background: #FFD099;
    }
  }
  @media (max-width: 576px) {
    padding: 20px;
    display: block;
    height: auto;
    button {
      width: 100%;
      margin-top: 10px;
    }
  }
`;