import { useState } from "react";
import { ActionFunctionArgs } from "@remix-run/node";
import { Link, json, useFetcher, useLoaderData } from "@remix-run/react";

import { prisma } from "~/utils/db.server";
import Check from "~/components/icons/check";
import Copy from "~/components/icons/copy";
import { format } from "date-fns";
import Button from "~/components/button";

interface FetcherResponse {
  targetUrl: string;
  vanity: string;
  vanityUrl: string;
  active: true;
  clicks: number;
}

const BASE_URL = `https://smol.co`;

// Regex explained: https://regexr.com/5c55v
const regex = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g;

const kebabCase = (str: string): string =>
  (String(str ?? "").match(regex) || []).map((x) => x.toLowerCase()).join("-");

export async function loader() {
  const links = await prisma.link.findMany();

  return json({
    links,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const targetUrl = String(formData.get("targetUrl"));
  const vanity = kebabCase(String(formData.get("vanityUrl")));
  const vanityUrl = `${BASE_URL}/${kebabCase(vanity)}`;
  const clicks = 0;

  const newLink = await prisma.link.create({
    data: {
      targetUrl,
      vanity,
      vanityUrl,
      active: true,
      clicks,
    },
  });

  return json(newLink);
}

export default function Index() {
  const { links } = useLoaderData<typeof loader>();
  const urlFetcher = useFetcher<FetcherResponse>();
  const [vanity, setVanity] = useState("The world is your oyster");

  const formatDate = (params: string) => {
    const date = new Date(params);
    return format(date, "MMM dd, yyyy hh:mm b");
  };

  return (
    <main className="container">
      <header className="main-header">
        <h1>🔗 Link Shortener</h1>
      </header>

      <div className="link-list-wrapper">
        {links.length > 0 ? (
          <ul>
            <li className="link-list-header">
              <div>Active</div>
              <div>Link</div>
              <div>Clicks</div>
              <div>Updated</div>
              <div></div>
            </li>
            {links.map((link) => (
              <li key={link.id} className="link-list-item">
                <div className="item-main">
                  <div className="active-status">
                    {link.active ? <Check /> : ""}
                  </div>
                  <div className="urls">
                    <div className="vanity-url">
                      <Link to={`/${link.vanity}`}>{link.vanityUrl}</Link>
                      <Button variant={"hollow"} icon="iconOnly">
                        <Copy />
                      </Button>
                    </div>
                    <div className="target-url">{link.targetUrl}</div>
                  </div>
                  <div className="clicks">{link.clicks}</div>
                  <div className="updated">{formatDate(link.updatedAt)}</div>
                  <div className="edit">
                    <Button variant={"hollow"}>Edit</Button>
                  </div>
                </div>
                <div className="expiration">
                  {link.expiration ? link.expiration : ""}
                </div>
                <div className="note">{link.note ? link.note : ""}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No links...</p>
        )}
      </div>
      <div className="grid">
        <div>
          <h2>Create</h2>
          <urlFetcher.Form method="post">
            <label htmlFor="targetUrl">URL</label>
            <input
              id="targetUrl"
              name="targetUrl"
              defaultValue="http://www.coolstuff.com/zW9FJG7D/my-really-long-url/3791a126"
            />

            <label htmlFor="vanity">Vanity</label>
            <input
              id="vanity"
              name="vanityUrl"
              onChange={(event) => {
                setVanity(String(event.currentTarget.value));
              }}
              value={vanity}
            />
            <small>
              {`Shareable URL example: ${BASE_URL}/${kebabCase(vanity)}`}
            </small>

            <button type="submit">Add URL</button>
          </urlFetcher.Form>

          {urlFetcher.data?.vanityUrl && (
            <>
              <p style={{ marginBottom: "0.5rem" }}>Output</p>
              <pre>
                <code>{urlFetcher.data?.vanityUrl}</code>
              </pre>
            </>
          )}

          {urlFetcher.data && (
            <>
              <p style={{ marginBottom: "0.5rem" }}>JSON Response</p>
              <pre>
                <code>
                  {urlFetcher.data
                    ? JSON.stringify(urlFetcher.data, null, 4)
                    : 'Click "Add URL" to see result'}
                </code>
              </pre>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
