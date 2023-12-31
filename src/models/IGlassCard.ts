import { ReactNode } from "react";

export default interface IGlassCard {
  image?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode | string;
  actions?: React.ReactNode;
  children?: ReactNode;
}
