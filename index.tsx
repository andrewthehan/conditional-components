type PredicateProps = {
  condition: boolean;
  children: JSX.Element;
  or?: () => JSX.Element;
};

export function Predicate({
  condition,
  children,
  or = () => <></>,
}: PredicateProps): JSX.Element {
  return condition ? children : or();
}

type NullableProps<T> = {
  value: T | null;
  children: (t: T) => JSX.Element;
  or?: () => JSX.Element;
};

export function Nullable<T>({
  value,
  children,
  or = () => <></>,
}: NullableProps<T>): JSX.Element {
  return value != null ? children(value) : or();
}
