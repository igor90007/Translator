# Translator
General idea for this application is open source analog of google's "Translate" app.
Translator application (like google translate). The key factor is: checking the status of the Internet (without it notifying that it does not work and blocking the controls), translating from one language to another, capturing speech and converting it into text, the ability to change the direction of the language (from English to Russian and from Russian to English). Type script.

# Structure
There are 3 code directories within this project: ios, android and Javascript(TypeScript).

On app launch, we check the internet connection. Then user types some text and app tries to fetch data from API. And the user gets a result. Also, the user is able to input by his voice (voice recognition feature).
