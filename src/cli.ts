import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  getVersion,
  getSpaces,
  selectSpace,
  getTabs,
  makeNewTab,
  makeNewLittleArcWindow,
  selectTab,
  reloadTab,
  closeTab,
} from "./arc.js";

export function startCli() {
  const cli = yargs(hideBin(process.argv))
    .command("arc-version", "Show Arc version", async () =>
      console.log(`Arc Browser version: ${await getVersion()}`)
    )
    .command(["list-spaces", "ls"], "List spaces", async () => {
      console.log("Arc spaces:\n");
      console.log((await getSpaces())?.map((space) => `${space.id}: ${space.title}`).join("\n"));
    })
    .command(
      ["select-space <space-id>", "s <space-id>"],
      "Select a space",
      async (yargs) =>
        yargs.positional("space-id", {
          describe: "space to select",
          type: "string",
          demandOption: true,
        }),
      async (argv) => await selectSpace(argv.spaceId)
    )
    .command(["list-tabs", "lt"], "List tabs", async () => {
      console.log("Arc tabs:\n");
      console.log(
        (await getTabs())
          ?.map((tab) => `${tab.windowId}, ${tab.tabId}, ${tab.title}, ${tab.url}, ${tab.location}`)
          .join("\n")
      );
    })
    .command(
      ["new-tab <url>", "nt <url>"],
      "Open URL in a new tab",
      async (yargs) =>
        yargs.positional("url", {
          describe: "URL to open",
          type: "string",
          demandOption: true,
        }),
      async ({ url }) => await makeNewTab(url)
    )
    .command(
      ["select-tab <window-id> <tab-id>", "st <window-id> <tab-id>"],
      "Select tab",
      async (yargs) =>
        yargs
          .positional("window-id", { type: "number", demandOption: true })
          .positional("tab-id", { type: "number", demandOption: true }),
      async ({ windowId, tabId }) => await selectTab({ windowId, tabId })
    )
    .command(
      ["reload-tab <window-id> <tab-id>", "rt <window-id> <tab-id>"],
      "Reload tab",
      async (yargs) =>
        yargs
          .positional("window-id", { type: "number", demandOption: true })
          .positional("tab-id", { type: "number", demandOption: true }),
      async ({ windowId, tabId }) => await reloadTab({ windowId, tabId })
    )
    .command(
      ["close-tab <window-id> <tab-id>", "ct <window-id> <tab-id>"],
      "Close tab",
      async (yargs) =>
        yargs
          .positional("window-id", { type: "number", demandOption: true })
          .positional("tab-id", { type: "number", demandOption: true }),
      async ({ windowId, tabId }) => await closeTab({ windowId, tabId })
    )
    .command(
      ["new-little-arc <url>", "nla <url>"],
      "Open URL in a new Little Arc window",
      async (yargs) =>
        yargs.positional("url", {
          describe: "URL to open",
          type: "string",
          demandOption: true,
        }),
      async ({ url }) => await makeNewLittleArcWindow(url)
    );

  // If there are no args passed, show help screen
  if (process.argv.slice(2).length == 0) {
    cli.showHelp();
    return;
  } else {
    return cli.parse();
  }
}
