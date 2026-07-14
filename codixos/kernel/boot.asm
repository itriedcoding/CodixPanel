; CodixOS Boot Assembly - Multiboot Header and Entry Point
; This is the real entry point for the kernel, loaded by GRUB

MBALIGN  equ 1 << 0            ; align loaded modules on page boundaries
MEMINFO  equ 1 << 1            ; provide memory map
FLAGS    equ MBALIGN | MEMINFO
MAGIC    equ 0x1BADB002        ; multiboot magic
CHECKSUM equ -(MAGIC + FLAGS)

section .multiboot
align 4
    dd MAGIC
    dd FLAGS
    dd CHECKSUM

section .bss
align 16
stack_bottom:
    resb 16384                  ; 16KB stack
stack_top:

section .text
global _start
extern kernel_main

_start:
    mov esp, stack_top          ; set up the stack
    push eax                    ; push multiboot magic
    push ebx                    ; push multiboot info pointer
    call kernel_main            ; call the kernel
.hang:
    cli                         ; disable interrupts
    hlt                         ; halt the CPU
    jmp .hang                   ; loop if we somehow wake up
