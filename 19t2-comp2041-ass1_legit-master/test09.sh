#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
legit-init
echo line 1 > a
echo hello world >b
echo hello >c
legit-add a b c
legit-commit -m 'first commit'
echo  line 2 >>a
legit-add a
legit-commit -m 'second commit'
legit-log
echo line 3 >>a
legit-add a
echo line 4 >>a
legit-show 0:a
legit-show 1:a
legit-show :a
legit-rm --force a
legit-rm --cached b
legit-rm --forced --cached b
legit-status