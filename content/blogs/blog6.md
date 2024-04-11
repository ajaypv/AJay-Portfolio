+++
title = 'Blog6'
date = 2024-04-05T12:42:42+05:30
author = "AJay PV"
categories = ["Web Development"]
role= "Dev"
photo = "images/aj.jpg"

+++

# Rust Control Flow: if, while and for loop

In this blog post, we will discuss about the control flow in Rust programming language, specifically `if`, `while` and `for` loop.

## If Statement

In Rust, `if` is a keyword that allows you to branch your code based on conditions.

```rust
let number = 7;

if number < 5 {
  println!("condition was true");
} else {
  println!("condition was false");
}

