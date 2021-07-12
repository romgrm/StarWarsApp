import React, { FC, ReactElement } from "react";
import { View, Text } from "react-native";

interface Props {
  title: string;
}

const Test: FC<Props> = (props) => {
  return (
    <View>
      <Text>Hello {
      private _value : string;
      public get value() : string {
          return this._value;
      }
      public set value(v : string) {
          this._value = v;
      }
      }</Text>
    </View>
  );
};
