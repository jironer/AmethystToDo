import React from "react";

import { getColor } from "@theme-ui/color";
import type { SxProp } from "theme-ui";

import { theme } from "../../theme";

export type CheckboxProps = Omit<
  React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> &
    SxProp,
  "type"
>;

export function Checkbox({ sx, ...restProps }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      sx={{ accentColor: getColor(theme, "primary") }}
      {...restProps}
    ></input>
  );
}
