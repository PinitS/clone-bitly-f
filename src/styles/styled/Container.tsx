import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (max-width: 768px) {
    max-width: 720px;
  }

  @media (max-width: 576px) {
    max-width: 540px;
  }
`;
export default Container;