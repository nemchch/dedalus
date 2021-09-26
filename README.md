# Hello! This is my Dedalus test task

## Front-end requirements
Implement an Angular application that supports following requirements:

1. a user can enter a text and start the analysis with the press of a button
2. the logic provided in the Text Analyzer java class (attached TextAnalyzer.java) is to be reused for the java script text analysis
3. write a test(s) that checks the output of the text analyzer logic
4. the content of the analysis is displayed as a human readable output in the UI.

An existing(previous) output should remain visible

Implement a toggle switch that changes the application behavior between online and offline functionality in this way:

1. Offline: The application uses its own implementation of the "Text Analyzer" to analyze the user input

2. Online: The application uses the REST API of the server to analyze the user input

## What's implemented
1. UI with bootstrap and its own color schema
2. REST API calls to backend 
3. Its own analyser implementation

## Needed improvements
1. Configure proxy and http client settings for service-worker
2. Full test coverage
3. Input verifications (0 letters, secure verification and so on)
4. Add sorting in table for "letter" and "times" columns
5. Fix tooltip color, table selection color, table stripped rows background color

## Work log
1. Create UI via Figma 1 mh
2. Add HTML elements and CSS style 3 mh
3. Configure application 2 mh
4. Create components and service 1 mh
5. Fix CORS issue 0.5 mh
6. Add values routing and fix errors 2 mh
7. Add service-worker 1.5 mh

Total: 11 mh
