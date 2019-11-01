#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
legit-init
echo line a >a
echo line b>bbb
legit-show :a
legit-add a b
legit-show :a
echo bbb >>a
legit-commit -m "first commit"
legit-show :a
legit-show 0:b
legit-add a
legit-commit -m "second commit"
legit-show :a
legit-log





#legit init/lehit-add/legit-commit/legit-log