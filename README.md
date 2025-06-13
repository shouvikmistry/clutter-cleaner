# 🧹 clutter-cleaner

**clutter-cleaner** is a simple and efficient Node.js script that automatically organizes your files by their extensions. Keep your folders neat and tidy with just one command!

---

## 🚀 Features

- 📂 Automatically sorts files into folders based on their file type (extension)
- 🛡️ Ignores important project files and hidden files
- ⚡ Super fast and easy to use
- 📝 No dependencies required (uses built-in Node.js modules)

---

## 📦 Folder Structure Example

Before running:

```
project/
├── Organize.js
├── README.md
├── image.png
├── document.pdf
├── song.mp3
```

After running:

```
project/
├── Organize.js
├── README.md
├── png/
│   └── image.png
├── pdf/
│   └── document.pdf
├── mp3/
│   └── song.mp3
```

---

## 🛠️ Usage

1. **Clone or download this repository.**
2. Place `Organize.js` in the folder you want to organize.
3. Open a terminal in that folder.
4. Run:

   ```sh
   node Organize.js
   ```

5. Watch your files get organized automatically!

---

## ⚙️ How It Works

- The script scans the current directory.
- For each file, it checks the extension and moves it into a folder named after that extension.
- If the folder doesn't exist, it creates it.
- Ignores itself and other important files.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Made with ❤️ by Shouvik Mistry