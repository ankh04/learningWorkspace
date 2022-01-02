# The difference between visual lines and logical lines in Vim
In Vim, when a sentence is too long to display in one line, it will be wrapped in another line, just like this:
![[Pasted image 20220102191619.png]]
the line 7 "act" like two lines.
In Vim, when you are typing `j` to nav to the next line with cursor located at the end of line 7 "K", the cursor will nav to line 8 directory, but not at "ey'". A approach to solve this is to use `gj` replacing `j`. 
`gj` means navigating to the **visual lines**
`j` means navigating to the **logical lines**