import React from "react";
import styled from "styled-components";

export function GoldBulletPoint(props) {
  const { children, size, color, styles } = props;

  return (
    <Bullet size={size} color={color} styles={styles}>
      {children}
    </Bullet>
  );
}

const Bullet = styled.li`
  margin: 10px 0px 10px 0px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text[props.size]};
  text-align: ${(props) => props.alignment};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.darkGray};
  width: 100%;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  list-style-position: inside;

  :: before {
    content: "■";
    position: absolute;
    color: ${(props) => props.theme.colors.mainGold};
    font-size: 20px;
    margin-left: -30px;
    margin-top: -2px;
  }

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.text.xxs};
  }

  ${(props) => props.styles}
`;
