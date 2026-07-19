# Arsenal Fan Website

A website dedicated to Arsenal Football Club featuring team information, fixtures, player profiles, club history, a fan store, and a simple fan registration/login demo.

## Technologies Used

- HTML
- CSS
- JavaScript (vanilla, using `localStorage` for demo data)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Merveux/arsenal.git
```

2. Open the project folder.

3. Open `index.html` in your browser (or serve the folder with a local server).

## Project Structure

```
arsenal/
├── index.html       Homepage
├── players.html      Squad list
├── fixtures.html     Upcoming matches & results
├── trophies.html      Club honours
├── gallery.html      Photo gallery (CSS placeholders)
├── store.html         Fan store
├── login.html         Fan / admin login
├── register.html       Fan registration
├── admin.html          Admin dashboard (add players, view fans)
├── style.css           Shared stylesheet
├── script.js            Shared JavaScript
└── README.md
```

## Notes on the demo login system

`register.html` and `login.html` are a **front-end-only demo**. Fan accounts are stored in the browser's `localStorage`, not in a real database, so:

- Accounts only exist in the browser/device you registered on.
- Passwords are **not** encrypted or secured in any way — never reuse a real password here.
- The built-in admin account is `admin` / `1234`.

## Future Improvements

- Live match scores
- Player statistics API
- Dark mode
- Real backend + database for accounts (instead of localStorage)
- Real player/stadium photography (with proper licensing)

## Author

KWIZERA Merveux

## License

This project is for educational purposes.
