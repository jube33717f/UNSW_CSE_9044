#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
legit-init
echo aaa>a
echo bbb>b
echo ccc>c
legit-add a b c
legit-commit -m "first commit"
legit-show :a
echo hello>>a
echo hello>>b
echo hello>>b
legit-add a b c
legit-show :a
legit-commit -m "second commit"
rm a
legit-rm b
ls -a
#legit-rm