
LAlt::LWin
LWin::LAlt
#IfWinActive ahk_exe java.exe
{  
    $#i::ControlSend ,,{Blind}{LWin down}{i down}{i up}{LWin up},ahk_exe java.exe
    $#o::ControlSend ,,{Blind}{LWin down}{o down}{o up}{LWin up},ahk_exe java.exe
    $#f::ControlSend ,,{Blind}{LWin down}{f down}{f up}{LWin up},ahk_exe java.exe
    $#z::ControlSend ,,{Blind}{LWin down}{z down}{z up}{LWin up},ahk_exe java.exe
    $#+=::ControlSend ,,{Blind}#+=,ahk_exe java.exe
    $#k::ControlSend ,,{Blind}{LWin down}{k down}{k up}{LWin up},ahk_exe java.exe
    $#/::ControlSend ,,{Blind}{LWin down}{/ down}{/ up}{LWin up},ahk_exe java.exe
    $#;::ControlSend ,,{Blind}#;,ahk_exe java.exe
    $#x::ControlSend ,,{Blind}{LWin down}{x down}{x up}{LWin up},ahk_exe java.exe
    $#c::ControlSend ,,{Blind}{LWin down}{c down}{c up}{LWin up},ahk_exe java.exe
    $#v::ControlSend ,,{Blind}{LWin down}{v down}{v up}{LWin up},ahk_exe java.exe
    $#a::ControlSend ,,{Blind}{LWin down}{a down}{a up}{LWin up},ahk_exe java.exe
    $#Backspace::ControlSend ,,{Blind}{LWin down}{Backspace down}{Backspace up}{LWin up},ahk_exe java.exe
    $#Left::ControlSend ,,{Blind}{LWin down}{Left down}{Left up}{LWin up},ahk_exe java.exe
    $#Right::ControlSend ,,{Blind}{LWin down}{Right down}{Right up}{LWin up},ahk_exe java.exe
    $#Up::ControlSend ,,{Blind}{LWin down}{Up down}{Up up}{LWin up},ahk_exe java.exe
    $#Down::ControlSend ,,{Blind}{LWin down}{Down down}{Down up}{LWin up},ahk_exe java.exe

    $#d::ControlSend ,,{Blind}{LWin down}{d down}{d up}{LWin up},ahk_exe java.exe
    $#+]::ControlSend ,,{Blind}{LWin down}{Shift down}{] down}{] up}{Shift up}{LWin up},ahk_exe java.exe
    $#+[::ControlSend ,,{Blind}{LWin down}{Shift down}{[ down}{[ up}{Shift up}{LWin up},ahk_exe java.exe
    $#u::ControlSend ,,{Blind}{LWin down}{u down}{u up}{LWin up},ahk_exe java.exe
    $#!b::ControlSend ,,{Blind}{LWin down}{Alt down}{b down}{b up}{Alt up}{LWin up},ahk_exe java.exe
    $#!Up::ControlSend ,,{Blind}{LWin down}{Alt down}{Up down}{Up up}{Alt up}{LWin up},ahk_exe java.exe
    $#!Down::ControlSend ,,{Blind}{LWin down}{Alt down}{Down down}{Down up}{Alt up}{LWin up},ahk_exe java.exe
    $#w::ControlSend ,,{Blind}{LWin down}{w down}{w up}{LWin up},ahk_exe java.exe
    $#!m::ControlSend ,,{Blind}{LWin down}{Alt down}{m down}{m up}{Alt up}{LWin up},ahk_exe java.exe
    $#!n::ControlSend ,,{Blind}{LWin down}{Alt down}{n down}{n up}{Alt up}{LWin up},ahk_exe java.exe
    $#!f::ControlSend ,,{Blind}{LWin down}{Alt down}{f down}{f up}{Alt up}{LWin up},ahk_exe java.exe
    $#!c::ControlSend ,,{Blind}{LWin down}{Alt down}{c down}{c up}{Alt up}{LWin up},ahk_exe java.exe
    
    $#!v::ControlSend ,,{Blind}{LWin down}{Alt down}{v down}{v up}{Alt up}{LWin up},ahk_exe java.exe

    $^!Down::ControlSend ,,{Blind}{Ctrl down}{Alt down}{Down down}{Down up}{Alt up}{Ctrl up},ahk_exe java.exe
    $^!Up::ControlSend ,,{Blind}{Ctrl down}{Alt down}{Up down}{Up up}{Alt up}{Ctrl up},ahk_exe java.exe
}