# ColorCares – Development Setup

## Overview
ColorCares is a community-driven doctor finder designed to help Black and Latinx patients connect with culturally competent healthcare providers. This repository includes both the **frontend (React + Vite)** and **backend (Flask)** components.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS (or CSS framework of choice)
- **Backend**: Flask, Flask-SQLAlchemy
- **API Communication**: RESTful API between Flask and React
- **Environment Management**: Miniconda (for Python dependencies)

---

## **Prerequisites**
Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [Miniconda](https://docs.conda.io/en/latest/miniconda.html) (Recommended for Python environment management)
- [Git](https://git-scm.com/downloads)
- A package manager (**npm** or **yarn**) for frontend dependencies

---

## **Backend Setup (Flask) with Miniconda**

```sh
cd backend  # Navigate to backend directory
conda create --name colorcares python=3.8 -y  # Create Miniconda environment
conda activate colorcares  # Activate the environment
pip install -r requirements.txt  # Install dependencies
python app.py  # Start Flask server
```
The backend will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

## **Frontend Setup (React + Vite)**

```sh
cd frontend  # Navigate to frontend directory
npm install  # Install dependencies
npm run dev  # Start the development server
```
The frontend will be available at [http://127.0.0.1:5173](http://127.0.0.1:5173).

---

## **Connecting Frontend to Backend**

```sh
echo "VITE_API_BASE_URL=http://127.0.0.1:5000" > .env  # Set API base URL in environment file
```
In React API requests, use:
```js
fetch(`${import.meta.env.VITE_API_BASE_URL}/doctors`)  // Fetch data from backend
```

---

## **Common Issues & Fixes**

**Flask: `python app.py` Fails**
```sh
conda activate colorcares  # Ensure correct environment is activated
pip install -r requirements.txt  # Reinstall missing dependencies
```

**React: `npm run dev` Fails**
```sh
npm install  # Ensure dependencies are installed
rm -rf node_modules package-lock.json && npm install  # Reinstall dependencies if needed
```

---

## **Project Workflow & Best Practices**
We follow a **feature/issue branching workflow** to keep `main` stable.
All development happens in separate branches before merging into `main`.

### **1️⃣ Cloning the Repository**
```sh
git clone https://github.com/alognz/ColorCares.git  # Clone the repository
cd ColorCares  # Navigate into the project
```

### **2️⃣ Creating a New Feature/Issue Branch**
```sh
git checkout main  # Switch to main
git pull origin main  # Pull latest changes
git checkout -b your-name/feature-name  # Create a new branch
```

### **3️⃣ Committing & Pushing Changes**
```sh
git status  # Check changed files
git add .  # Stage all changes
git commit -m "Added search functionality for doctors"  # Commit changes
git push origin feature-name  # Push branch to GitHub
```

### **4️⃣ Creating a Pull Request (PR)**
1. Go to the GitHub repository.
2. Navigate to the **Pull Requests** tab.
3. Click **New Pull Request**, select your branch, and request a review.
4. Once approved, merge into `main`.

### **5️⃣ Keeping Your Branch Up to Date**
```sh
git checkout main  # Switch to main
git pull origin main  # Get latest changes
git checkout feature-name  # Switch back to feature branch
git merge main  # Merge updates
```
Resolve merge conflicts manually before committing if needed.

### **6. Deleting Merged Branches**
```sh
git branch -d feature-name  # Delete branch locally
git push origin --delete feature-name  # Delete branch on GitHub
```

---

## **Common Git Issues & Fixes**

**Accidentally committed to the wrong branch?**
```sh
git reset --soft HEAD~1  # Undo last commit but keep changes
git stash  # Save changes temporarily
git checkout -b correct-branch  # Create the correct branch
git stash pop  # Restore saved changes
```

**Merge conflicts?**
```sh
git merge main  # Merge latest changes
# Resolve conflicts manually, then commit:
git add .
git commit -m "Resolved merge conflicts"
```

---

## ** Summary of Git Commands**

| Action | Command |
|--------|---------|
| Clone the repository | `git clone <repo-url>` |
| Create a new branch | `git checkout -b feature-name` |
| Switch branches | `git checkout branch-name` |
| Pull latest changes | `git pull origin main` |
| Stage changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push a branch | `git push origin feature-name` |
| Merge main into your branch | `git merge main` |
| Delete a branch (local) | `git branch -d feature-name` |
| Delete a branch (GitHub) | `git push origin --delete feature-name` |


  
