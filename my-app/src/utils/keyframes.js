import { keyframes } from "styled-components";

export const fadeIn = keyframes`
from{
  opacity:0;
  transform: translateY(1rem);
}
to{
  opacity:1;
  transform: translateY(0rem);
}
`;

export const spacing = keyframes`
0%{
  padding: 0 1rem;
}
100%{
  padding: 0.1rem;
}
`;

export const slideIn = keyframes`
0%{
  opacity: 0;
  transform: translateY(5rem) rotateY(30deg);
}
50%{
  opacity: 0;
  transform: translateY(5rem) rotateY(30deg);
}
100%{
  opacity: 1;
  transform: translateY(0);
}
`;

export const shed = keyframes`
0%{
  transform: rotateZ(0deg)
}
25%{
  transform: rotateZ(10deg)
}
75%{
  transform: rotateZ(-10deg)
}
100%{
  transform: rotateZ(0deg)
}
`;
export const hide = keyframes`
0%{
  opacity:1;
}
90%{
  opacity:1;
}
100%{
  opacity:0;
}
`;
