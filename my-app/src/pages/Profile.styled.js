import styled from "styled-components";
import StyledContainer from "../utils/StyledContainer";

const StyledProfile = styled(StyledContainer)`
  padding-bottom: 2rem;
  .previous-order,
  .account-title {
    margin: 0.5rem;
    margin-top: 1.5rem;
  }
  .orders,
  .account {
    margin: 0.5rem 5.5rem;
    padding-bottom: 1rem;
  }
  .add-items {
    padding: 1rem;
    text-align: center;
    font-size: 1.25rem;
    h3 {
      padding: 1rem;
    }
  }

  @media (max-width: 786px) {
    .orders,
    .account {
      margin: 0.5rem 2rem;
    }
  }
  @media (max-width: 480px) {
    h1 {
      margin-left: 0.5rem;
    }
    .orders,
    .account {
      margin: 0 0.25rem 0 0;
    }
    .previous-order,
    .account-title {
      font-size: 1.2rem;
    }
  }
`;

export default StyledProfile;
