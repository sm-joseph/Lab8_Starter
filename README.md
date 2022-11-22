# Lab 8 - Starter

__Check your understanding__
1. The correct answer is to run automated tests within a Github Action that runs whenever new code is pushed. This way, you can always be sure that you're on top of things and catch small bugs before they snowball. You also don't need to put effort into manually running tests every time your code base changes.

__Part 1__
2. You would not use an end-to-end test for a simple function output. The entirety of the software doesn't need to be tested in this case--a unit test would work much better to make sure your function returns correctly.

__Part 2__
3. You would not use a unit test for this kind of application. You would need to test all the elements of the user experience, from typing the message to sending it and adding attachments, etc. You would also need to check that the message was actually recieved by the other user/device, so it is beyond the scope of a simple unit test.

4. You could use a unit test for this feature. Since the only job of such a function is to ensure that a message is not longer than a certain amount of characters, you could use unit testing to type out messages longer than the limit and check to ensure they've been cut off. An E2E test of the entire application is not required to check the functionality of a simple feature like this. 