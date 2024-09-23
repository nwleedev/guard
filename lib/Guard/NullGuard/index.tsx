import { isNil } from "ramda";

export interface NullGuardProps<T> {
  data?: T;

  children?: (data: NonNullable<T>) => JSX.Element;
  fallback?: JSX.Element;
}

function NullGuard<T>(props: NullGuardProps<T>) {
  const { data, children, fallback } = props;

  if (isNil(data)) {
    return fallback ?? null;
  }

  const element = children ? children(data as NonNullable<T>) : null;
  return element;
}

export default NullGuard;
