import React from "react";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export const fixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
): ((props: P & React.RefAttributes<T>) => React.ReactNode) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return React.forwardRef(render as any) as any;
};
