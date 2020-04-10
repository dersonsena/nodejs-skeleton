import { DomainRoute, HttpVerbs } from "../../core/contracts/IDomainContracts";
import { domainPath, baseUrl } from "./settings";

const routes: DomainRoute[] = [
  {
    endpoint: `${baseUrl}`,
    method: HttpVerbs.GET,
    action: `${domainPath}/actions/list`,
    meta: {}
  },
  {
    endpoint: `${baseUrl}/:id`,
    method: HttpVerbs.GET,
    action: `${domainPath}/actions/single`,
    meta: {}
  },
  {
    endpoint: `${baseUrl}`,
    action: `${domainPath}/actions/create`,
    method: HttpVerbs.POST,
    meta: {}
  },
  {
    endpoint: `${baseUrl}/batch-insert`,
    action: `${domainPath}/actions/batch`,
    method: HttpVerbs.POST,
    meta: {}
  },
  {
    endpoint: `${baseUrl}/:id`,
    method: HttpVerbs.DELETE,
    action: `${domainPath}/actions/delete`,
    meta: {}
  }
];

export default routes;
