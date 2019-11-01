#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
legit-init
legit-init
echo a1 >a
echo b1 >b
legit-add a
legit-commit -m 'first commit'
echo a2 >>a
echo a3 >>a
legit-add a b
legit-commit -m 'second commit'
#.legit init/legit-add/legit-commit