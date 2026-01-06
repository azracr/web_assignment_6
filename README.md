# Post Dashboard – React Assignment

This project is a simple Post Dashboard application built using React.

The goal of this assignment is to practice asynchronous data fetching, side effects, and state management using only the concepts covered in React Week 1 and Week 2.

---

## Project Overview

The application fetches posts from a public API and displays them in a list.

Features:
- Fetching posts asynchronously
- Showing loading, error, and empty states
- Filtering posts by title using a controlled input
- Managing async state with useReducer

---

## Technologies Used

- React
- Vite
- JavaScript
- Fetch API

No external libraries or advanced React features were used.


---

## Implementation Notes

- useEffect is used to fetch data on initial render
- useReducer is used to manage loading, error, and data states
- Filtering is implemented as derived state during render
- An AbortController is used to prevent memory leaks

---

## Challenges

- Managing async state correctly with useReducer
- Handling different UI states without adding unnecessary complexity

---

## Author

Zübeyde Azra Acar

