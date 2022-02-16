import { useState } from "react";

export default function useToggle(
  initialValue: boolean = false
): [boolean, () => void, typeof setValue] {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);

  return [value, toggle, setValue];
}
