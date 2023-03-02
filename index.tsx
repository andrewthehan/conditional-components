import React, { ReactNode, ReactElement } from "react";

type PredicateProps = {
  condition: boolean;
  children: ReactNode;
  or?: () => ReactNode;
};

export function Predicate({
  condition,
  children,
  or = () => <></>,
}: PredicateProps): ReactElement {
  return <>{condition ? children : or()}</>;
}

type NullableProps<T> = {
  value: T | null | undefined;
  children: (t: T) => ReactNode;
  or?: () => ReactNode;
};

export function Nullable<T>({
  value,
  children,
  or = () => <></>,
}: NullableProps<T>): ReactElement {
  return <>{value !== null && value !== undefined ? children(value) : or()}</>;
}
