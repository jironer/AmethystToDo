import { getColor } from "@theme-ui/color";
import React from "react";

import { theme } from "../../theme";

export type CheckboxProps = Omit<
  React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

export function ThemedCheckbox({ ...restProps }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      sx={{ accentColor: getColor(theme, "primary") }}
      {...restProps}
    />
  );
}
