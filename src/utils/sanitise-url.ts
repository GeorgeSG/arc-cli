export function sanitiseUrl(url: string): string {
    // if url does not start with http or https, prepend https
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }
  return url;
}