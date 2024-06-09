import DotaHeroAPI from "@/src/client/constants/dota-hero-API";
import { RestError } from "@/src/server/models/rest-error";

export async function GET() {
  try {
    const hero = await fetch(DotaHeroAPI);
    if (!hero.ok) throw RestError.notFound;

    return await hero.json();
  } catch (err: unknown) {
    return;
  }
}
