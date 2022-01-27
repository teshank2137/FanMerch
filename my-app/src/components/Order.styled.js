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
  }
`;

export default StyledOrder;
