#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
legit-init
echo aaa >a
echo bbb >bbb
legit-add a b
echo bbb >>a
legit-commit -m "first commit"
legit-show 0:b
legit-show :a
legit-add a
legit-commit -m "second commit"
legit-log





#legit init/lehit-add/legit-commit/legit-log