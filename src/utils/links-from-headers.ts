export function linksFromHeaders(
  header: string
): Record<string, string> | null {
  if (!header) return null;
  const linkHeadersArray = header
    .split(", ")
    .map((header) => header.split("; "));

  const links: Record<string, string> = {};

  linkHeadersArray.forEach((header) => {
    const headerRel = header[1].replace(/"/g, "").replace("rel=", "");
    const headerUrl = header[0].slice(1, -1);
    links[headerRel] = headerUrl;
  });

  return links;
}
