Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:

- iphone pro max = 14 letter \* 1000 users = 14000
- iphone pro max = 3 API calls \* 1000 users = 3000

Debouncing with 200ms

- if different between 2 key strokes is <200ms - DECLINE API call
- greater than 200ms - make an api call
