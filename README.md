# osx-jetbrains-keymap-for-windows
![test](https://github.com/SeliMeli/osx-jetbrains-keymap-for-windows/actions/workflows/node.js.yml/badge.svg) [![npm](https://badge.fury.io/js/osx-jetbrains-keymap-generator.svg)](https://badge.fury.io/js/osx-jetbrains-keymap-generator)

I like using Jetbrains IDE on my mac. I want to use it on Windows as well without having to re-learn a windows specific keymap. The whole trick is to using win key as meta key (Win key is not a valid modifier key in Java) and block all other programmes(yes, including you, windows) from intercepting our Jetbrains' shortcut.


So first, you need to make your Jetbrains IDE take win key as a meta key. At your IDE, open `help -> edit custom properties`, add `keymap.windows.as.meta=true` to the opened file.
And of course, download the osx keymap plugin at plugin market, change your IDE keymap to the osx one.


To block other programmes, download a [Autohotkey](https://www.autohotkey.com/), Run the example ahk in this repo.

or you can get a ahk script generator from npm to generate your own keymap script. 

using `npm -i -g osx-jetbrains-keymap-generator` to get the generator and run `kmg -f <your keymap xml> -e <jetbrains process name>`

get help `kmg -h`

As a reuslt, your left windows key will work as`⌥` key and your left alt key will work as `⌘` in your IDE.


Enjoy~
