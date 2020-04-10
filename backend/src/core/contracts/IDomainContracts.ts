export enum HttpVerbs {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
  PATCH = "patch",
  OPTIONS = "options"
}

export interface DomainRoute {
  endpoint: string;
  method: HttpVerbs;
  action: string;
  meta: object;
}
