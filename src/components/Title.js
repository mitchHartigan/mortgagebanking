import React from "react";
import styled from "styled-components";

/**
 * @param props
 * @param props.spanWidth - width of the span element in px, vw, etc.
 * @param props.size - font size of the Title elem, in sm, lg, etc.
 * @param props.chilren - the text to be displayed as the Title.
 * @param props.align - text-align property of the Title.
 * @param props.styles - additional styles to be passed into the Container.
 * @param props.alignTitle - flex align-items of the Container.
 */

export const Title = (props) => {
  const {
    spanWidth,
    spanColor,
    size,
    color,
    children,
    align,
    alignTitle,
    styles,
  } = props;

  return (
    <Container styles={styles} alignTitle={alignTitle}>
      <Header size={size} align={align} color={color}>
        {children}
      </Header>
      <Underline spanWidth={spanWidth} spanColor={spanColor}></Underline>
    </Container>
  );
};

const Header = styled.h2`
  margin: 0px;
  font-family: ${(props) => props.theme.titleFont};
  font-size: ${(props) => props.theme.text[props.size]};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.darkGray};
  -webkit-font-smoothing: antialiased;
  margin-bottom: 7px;
  font-weight: normal;
  text-align: ${(props) => props.align};
  ${(props) => props.styles};

  @media (max-width: 1100px) {
    font-size: ${(props) =>
      props.size === "xl" || props.size === "xxl"
        ? props.theme.text.lg
        : props.theme.text[props.size]};
  }

  @media (max-width: 800px) {
    text-align: center;
    line-height: 1.2em;
  }
`;

const Underline = styled.span`
  height: 3px;
  width: ${(props) => (props.spanWidth ? props.spanWidth : "100px")};
  background: ${(props) =>
    props.spanColor ? props.spanColor : props.theme.colors.mainGold};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.alignTitle ? props.alignTitle : "center")};
  ${(props) => props.styles}
`;
