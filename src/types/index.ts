import { ComponentType } from "react";

export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.type";
export type { ITourPackage } from "./tour.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
export interface IApiError {
  status: number;
  data: {
    success: boolean;
    message: string;
    error?: unknown;
  };
}
export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER";

type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}

export interface IAuth {
  provider: "credentials" | "google" | string;
  providerId: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  isDeleted: boolean;
  isActive: "ACTIVE" | "INACTIVE" | "BLOCKED";
  isVerified: boolean;
  role: "SENDER" | "RECEIVER" | "ADMIN" | "SUPER_ADMIN";
  auths: IAuth[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}