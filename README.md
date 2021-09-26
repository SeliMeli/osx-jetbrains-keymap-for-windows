# osx-jetbrains-keymap-for-windows
I like using Jetbrains IDE on my mac. I want to use it on Windows as well without to re-learn a windows specific keymap. The whole trick is to using win key as meta key (Win key is not a valid modifier key in Java) and block all other programmes(yes, including you, windows) from intercepting our Jetbrains' shortcut.


So first, you need to make your Jetbrains IDE take win key as a meta key. At your IDE, open `help -> edit custom properties`, add `keymap.windows.as.meta=true` to the opened file.
And of course, download the osx keymap plugin at plugin market, change your IDE keymap to the osx one.


To block other programmes, download a [Autohotkey](https://www.autohotkey.com/), Run the script in this repo.

Enjoy~
