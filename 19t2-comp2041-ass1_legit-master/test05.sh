#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
legit-init
echo line1 >a
echo line2 >b
legit-add a b
legit-commit -m "first commit"
echo line3 >>a
echo line4 >>b
legit-commit -a -m "second commit"
legit-show :a
legit-show :b
legit-status
legit-rm a
legit-status

#legit-commit -a