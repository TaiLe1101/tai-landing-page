import { cacheLife } from "next/cache";
import { fetchPublicPlans, type PlanDto } from "./plans";

export async function getCachedPublicPlans(): Promise<PlanDto[]> {
  "use cache";
  cacheLife("minutes");
  return fetchPublicPlans();
}
