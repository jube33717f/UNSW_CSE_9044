#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
legit-init
echo line 1 >a
legit-add a
legit-commit -m commit-0
legit-branch b1
legit-checkout b1
echo line 2 >>a
echo hello >b
legit-add a b
legit-commit -m commit-1
