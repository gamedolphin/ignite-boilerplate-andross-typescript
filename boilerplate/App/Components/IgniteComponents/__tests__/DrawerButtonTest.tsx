import "react-native";
import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import {Direction as DrawerButton} from "../DrawerButton";

test("DrawerButton component renders correctly", () => {
  const tree = renderer.create(<DrawerButton onPress={() => {}} text="hi" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0;
  const onPress = () => i++;
  const wrapperPress = shallow(<DrawerButton onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});

test("DrawerButton component renders correctly", () => {
  const tree = renderer.create(<DrawerButton isRtl onPress={() => {}} text="hi" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0;
  const onPress = () => i++;
  const wrapperPress = shallow(<DrawerButton isRtl onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});