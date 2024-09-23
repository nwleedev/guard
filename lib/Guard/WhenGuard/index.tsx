import { PropsWithChildren } from "react";

export interface WhenGuardProps extends PropsWithChildren {
  when?: boolean;

  fallback?: JSX.Element;
}

const WhenGuard = (props: WhenGuardProps) => {
  const { when, fallback, children } = props;

  if (!when) {
    return fallback ?? null;
  }
  return children;
};

export default WhenGuard;
