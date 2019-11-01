#!/bin/dash
#author: Ziyan Chen
#class:9041 soft-con
#written in 14/07/2019
echo new contents >b
legit-checkout master
legit-checkout: error: Your changes to the following files would be overwritten by checkout:
legit-add b
legit-commit -m commit-C
legit-checkout master
