import styled from "styled-components";

const StyledOrder = styled.div`
  border: 1px solid #fff4;
  border-radius: 4px;
  background: #9991;
  backdrop-filter: blur(4px);
  margin: 0.5rem;
  padding: 1rem;
  width: 100%;
  .label {
    font-size: 1rem;
    font-weight: normal;
  }
  .status {
    font-size: 1.35rem;
    font-weight: bold;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .group {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    padding: 0.25rem 0;
  }
  .price {
    font-size: 1.25rem;
  }
  .date {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
  .btn-grp {
    display: flex;
    justify-content: flex-start;
    /* align-items: flex-start; */
  }

  @media (max-width: 786px) {
    .label {
      font-size: 0.8rem;
    }
    .price,
    .date,
    .status {
      font-size: 1rem;
    }

    .details {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media (max-width: 380px) {
    .btn-grp {
      flex-direction: row;
    }
    .status.flex {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default StyledOrder;
