对于如下c语言
```c
// main.c
int sum(int *a, int n);
int array[2] = {1, 2}; 
int main() {
	int val = sum(array, 2);
	return val;
}
```

```c
//sum.c
int sum(int *a, int n) {
	int i, s = 0;
	for (i = 0; i < n; i++) {
		s += a[i];
	}
	return s;
}
```
通过 GNU 的编译器将上面的c代码编译成汇编代码:

```shell
$ gcc -S main.c sum.c
```
编译后得到两个汇编文件:
```asm
.file   "main.c"
    .text
    .globl  array
    .data
    .align 8
    .type   array, @object
    .size   array, 8
array:
    .long   1
    .long   2
    .text
    .globl  main
    .type   main, @function
main:
.LFB0:
    .cfi_startproc
    pushq   %rbp
    .cfi_def_cfa_offset 16
    .cfi_offset 6, -16
    movq    %rsp, %rbp
    .cfi_def_cfa_register 6
    subq    $16, %rsp
    movl    $2, %esi
    leaq    array(%rip), %rax
    movq    %rax, %rdi
    call    sum@PLT
    movl    %eax, -4(%rbp)
    movl    -4(%rbp), %eax
    leave
    .cfi_def_cfa 7, 8
    ret
    .cfi_endproc
.LFE0:
    .size   main, .-main
    .ident  "GCC: (GNU) 11.2.0"
    .section    .note.GNU-stack,"",@progbits
```

```asm
    .file   "sum.c"
    .text
    .globl  sum
    .type   sum, @function
sum:
.LFB0:
    .cfi_startproc
    pushq   %rbp
    .cfi_def_cfa_offset 16
    .cfi_offset 6, -16
    movq    %rsp, %rbp
    .cfi_def_cfa_register 6
    movq    %rdi, -24(%rbp)
    movl    %esi, -28(%rbp)
    movl    $0, -4(%rbp)
    movl    $0, -8(%rbp)
    jmp .L2
.L3:
    movl    -8(%rbp), %eax
    cltq
    leaq    0(,%rax,4), %rdx
    movq    -24(%rbp), %rax
    addq    %rdx, %rax
    movl    (%rax), %eax
    addl    %eax, -4(%rbp)
    addl    $1, -8(%rbp)
.L2:
    movl    -8(%rbp), %eax
    cmpl    -28(%rbp), %eax
    jl  .L3
    movl    -4(%rbp), %eax
    popq    %rbp
    .cfi_def_cfa 7, 8
    ret
    .cfi_endproc
.LFE0:
    .size   sum, .-sum
    .ident  "GCC: (GNU) 11.2.0"
    .section    .note.GNU-stack,"",@progbits
```
