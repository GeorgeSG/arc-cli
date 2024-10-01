export function sanitiseUrl(url: string): string {
    // if url does not start with http or https, prepend https
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
}