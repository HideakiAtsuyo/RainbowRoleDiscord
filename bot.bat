@echo off
Title RainbowRoleDiscordBot By HideakiAtsuyo
cls
color 0
:question
echo 1) Install modules
echo 2) Launch bot(if he crash you have to relaunch it)
echo 3) Launch bot(if he crash he relaunch itself)
echo 4) Exit
set /p choix=What do u want? (1/2/3):
 
if /I "%choix%"=="1" (goto :Install)
if /I "%choix%"=="2" (goto :Launch)
if /I "%choix%"=="3" (goto :LaunchWithoutStop)
if /I "%choix%"=="4" (goto :End)
goto question
 
:Install
Title RainbowRoleDiscordBot By HideakiAtsuyo - Installation
cls
echo.
npm i
echo Finished!
goto question
 
:Launch
Title RainbowRoleDiscordBot By HideakiAtsuyo - Launched
cls
echo.
echo Launched!
node index.js
pause
goto end

:LaunchWithoutStop
Title RainbowRoleDiscordBot By HideakiAtsuyo - Launched I
cls
echo.
echo Launched!
node index.js
echo Crash... Relaunch(Wait 10 seconds)!!
timeout /t 10 /nobreak
goto LaunchWithoutStop
 
:End
cls
echo.
msg * Bye %username%
exit
