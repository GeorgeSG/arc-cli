# arc-cli

`arc-cli` is a command line interface for the [Arc Browser](https://arc.net/).
This project is not affiliated with Arc Browser or The Browser Company


# Installation

Required: NodeJS

```
npm install -g @georgesg/arc-cli
```

# Usage

```
arc-cli [command]

Commands:
  arc-cli arc-version                      Show Arc version
  arc-cli list-spaces                      List spaces             [aliases: ls]
  arc-cli select-space <space-id>          Select a space          [aliases: s]
  arc-cli select-space-name <space-name>   Select a space by name  [aliases: sn]
  arc-cli list-tabs                        List tabs               [aliases: lt]
  arc-cli new-tab <url>                    Open URL in a new tab   [aliases: nt]
  arc-cli select-tab <window-id> <tab-id>  Select tab              [aliases: st]
  arc-cli reload-tab <window-id> <tab-id>  Reload tab              [aliases: rt]
  arc-cli close-tab <window-id> <tab-id>   Close tab               [aliases: ct]
  arc-cli new-little-arc <url>             Open URL in a new Little Arc window
                                                                  [aliases: nla]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

# Credits

Inspired by and reusing some code from the [Racyast Arc extension](https://www.raycast.com/the-browser-company/arc).
