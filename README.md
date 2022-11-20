# Lab 8 - Starter

__Check your understanding__
1. The correct answer is to run automated tests within a Github Action that runs whenever new code is pushed. This way, you can always be sure that you're on top of things and catch small bugs before they snowball. You also don't need to put effort into manually running tests every time your code base changes.

__Part 1__
2. You would not use an end-to-end test for a simple function output. The entirety of the software doesn't need to be tested in this case--a unit test would work much better to make sure your function returns correctly.