import React from "react";

import {
  Container,
  Inner,
  Item,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children} </Inner>
    </Item>
  );
}
// =========== Container ===========
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
// =========== Pane ===========
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
// =========== Title ===========
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
// =========== SubTitle ===========
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
// =========== Image ===========
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
