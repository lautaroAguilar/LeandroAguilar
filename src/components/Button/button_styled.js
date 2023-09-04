import styled from "styled-components";
import Link from "next/link";

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;

  height: 40px;
  width: 100%;
  border-radius: 40px;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  color: white;
  background-color: #ff2727;
  font-family: var(--font-bebas);
  font-size: 16px;
`;

export const CustomLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: white;
`;
