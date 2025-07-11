# 🍽️ MenuMaster – Full Stack Food Ordering App

**MenuMaster** is a food ordering platform built using **React** (HTML/CSS/JavaScript) for the frontend and **PHP + MySQL** via **XAMPP** for the backend. It is designed to simplify food ordering on campuses.

---

## ⚙️ Tech Stack

- **Frontend:** React, HTML, CSS, JavaScript  
- **Backend:** PHP (XAMPP)  
- **Database:** MySQL (via phpMyAdmin)

---

## 🧑‍💻 How to Run This Project (Windows)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Noushin-Saher/MenuMaster.git
cd MenuMaster
```

Or download it as a ZIP and extract.

---

### 2️⃣ Setup the Frontend (React)

```bash
cd frontend
npm install
npm start
```

The app will run at:  
👉 `http://localhost:3000`

---

### 3️⃣ Setup the Backend (PHP + MySQL via XAMPP)

#### 🧰 Step-by-Step (Windows)

1. **Install XAMPP**  
   👉 [Download here](https://www.apachefriends.org/index.html)

2. **Start XAMPP Control Panel**  
   ✅ Turn **ON Apache** and **MySQL**

3. **Place Backend Files in XAMPP**  
   - Copy the `Backend` folder from this project
   - Paste it into:
     ```
     C:\xampp\htdocs\Backend
     ```

4. **Create the Database**

You have two options:
- ✅ **Option A** (Use provided SQL file):
  - Go to: `http://localhost/phpmyadmin`
  - Create a database (e.g., `menumaster`)
  - Click the **Import** tab
  - Select the provided `database.sql` file (or similar)
  - Click **Go**

- ✍️ **Option B** (Create your own database):
  - You can design your own tables (like `items`, `orders`, `users`, etc.) based on the project structure.
  - Then update the PHP code and SQL connection accordingly.

---

### 4️⃣ Update React API URLs

In your React code, update fetch/axios paths like this:

```js
fetch("http://localhost/Backend/create_item.php")
```

> Make sure it matches your backend file names and structure.

---

## ✅ Final Steps

1. **Ensure XAMPP is running** with Apache & MySQL enabled  
2. **Start the React frontend**
   ```bash
   cd frontend
   npm start
   ```
3. **Visit in your browser:**  
   👉 `http://localhost:3000`

---

## Notes

- XAMPP must be running for backend functionality to work
- `htdocs` is the root folder for all PHP apps
- Make sure your database name and connection details match those in `db_connection.php` or equivalent
- You can freely modify the database schema to fit your version of the project

---

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [PHP Manual](https://www.php.net/manual/en/)
- [XAMPP Documentation](https://www.apachefriends.org/index.html)

GitHub Repo: [MenuMaster](https://github.com/Noushin-Saher/MenuMaster)