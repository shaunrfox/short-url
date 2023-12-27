import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { prisma } from "~/utils/db.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { vanity } = params;
  invariant(vanity, "Vanity not found");

  const retrieved = await prisma.link.findUnique({
    where: {
      vanity,
    },
  });
  invariant(retrieved, "Link not found");

  return redirect(retrieved.vanityUrl);
}
