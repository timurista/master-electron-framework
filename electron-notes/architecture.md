For reference:
https://electronjs.org/docs/tutorial/application-architecture

## Main Process
runs the main script
only one main process, never more

## Render Process
chromiums multi-process architecture is used also

## Native Power
Nodejs lets us access lower level system interactions.

# BrowserWindow
main process creates BrowserWindow instance runs in own render process.

When BrowserWindow instance destroyed, render process terminated

https://www.draw.io/#G1KXtkPgUKVSFSa381cZZjj9S-2tcod1kh




