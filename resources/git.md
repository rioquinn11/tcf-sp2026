# Git Cheatsheet

## What is Git?

Git is a distributed version control system. It tracks changes in source code during software development and is designed for coordinating work among programmers.

Unlike centralized version control systems where the complete codebase resides on a single server, Git allows every developer to have a full copy of the repository on their local machine. This includes the entire history of all changes. This architecture makes Git fast and allows for robust offline work.

## Fun Facts

- **Origin:** Git was created in 2005 by Linus Torvalds, the creator of the Linux kernel. He wrote the initial version in just a few days to manage the Linux kernel development.
- **Naming:** Torvalds has quipped that he names all his projects after himself: "First Linux, now git." (In British slang, "git" can mean an unpleasant or foolish person).
- **Design Philosophy:** Git was designed specifically to be fast and to handle non-linear development (thousands of parallel branches) efficiently, addressing the shortcomings Torvalds saw in other systems like CVS or Subversion.

---

## Core Concepts

- **Repository (Repo):** The directory where your project lives.
- **Commit:** A snapshot of your project at a specific point in time.
- **Stage (Index):** An area where you prepare changes before committing them.
- **Branch:** A parallel version of the repository. It allows you to work on different features without affecting the main codebase.
- **Remote:** A common repository on a server (like GitHub or GitLab) that all team members exchange changes with.

---

## Common Commands Reference

### Setup and Configuration

| Command                                  | Description                                                          |
| :--------------------------------------- | :------------------------------------------------------------------- |
| `git config --global user.name "Name"`   | Sets the name attached to your commits.                              |
| `git config --global user.email "email"` | Sets the email attached to your commits.                             |
| `git init`                               | Initializes a new local Git repository.                              |
| `git clone <url>`                        | Downloads a project and its entire history from a remote repository. |

### Basics (The Daily Workflow)

| Command                   | Description                                                    |
| :------------------------ | :------------------------------------------------------------- |
| `git status`              | Shows the status of changes as untracked, modified, or staged. |
| `git add <file>`          | Adds a file to the staging area.                               |
| `git add .`               | Adds all current changes to the staging area.                  |
| `git commit -m "Message"` | Saves the staged changes with a descriptive message.           |
| `git log`                 | Displays the commit history.                                   |

### Branching and Merging

| Command                  | Description                                          |
| :----------------------- | :--------------------------------------------------- |
| `git branch`             | Lists all local branches.                            |
| `git branch <name>`      | Creates a new branch.                                |
| `git checkout <name>`    | Switches to the specified branch.                    |
| `git checkout -b <name>` | Creates a new branch and switches to it immediately. |
| `git merge <branch>`     | Merges the specified branch into the current branch. |

### Remote Repositories

| Command         | Description                                                                     |
| :-------------- | :------------------------------------------------------------------------------ |
| `git remote -v` | Lists all remote repositories.                                                  |
| `git pull`      | Fetches changes from the remote server and merges them into the current branch. |
| `git push`      | Uploads local branch commits to the remote repository.                          |

---

## Situational Guide

**Situation: I want to start a new project.**

1. Create a folder for your project.
2. Run `git init`.

**Situation: I want to save my work.**

1. Run `git status` to see what you changed.
2. Run `git add .` to stage all files (or `git add filename` for specific files).
3. Run `git commit -m "Description of changes"` to save the snapshot.

**Situation: I want to download code from GitHub.**

1. Copy the URL from the green "Code" button on GitHub.
2. Run `git clone <url>`.

**Situation: I made a mistake in a file but haven't committed yet.**

- To discard changes in a specific file: `git checkout -- <filename>`

**Situation: I want to work on a new feature without breaking the main code.**

1. Run `git checkout -b new-feature-name`.
2. Make your changes and commit them.
3. When finished, switch back to main: `git checkout main`.
4. Merge your new feature: `git merge new-feature-name`.

**Situation: I messed up the last commit message.**

- Run `git commit --amend -m "New message"` (only do this if you haven't pushed the commit yet).
