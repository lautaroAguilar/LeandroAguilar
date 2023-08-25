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
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`
