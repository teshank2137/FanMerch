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
`;

export default StyledProfile;
