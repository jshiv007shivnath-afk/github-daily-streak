# GitHub Daily Contribution Streak Keeper

Automated daily commit repository designed to keep your GitHub contribution graph active and dark green with **10 to 12 contributions every single day**, running entirely in the cloud via GitHub Actions.

## Features
- **10 to 12 Commits Daily**: Automatically creates a randomized batch of 10, 11, or 12 commits every day.
- **Personalized Attribution**: Configured for `jshiv007shivnath-afk` (`jshiv007.shivnath@gmail.com`).
- **Cloud Execution**: Runs independently on GitHub's servers whether your local PC is turned on or off.
- **Manual Trigger**: Option to trigger on-demand via `workflow_dispatch` with a custom commit count if desired.

---

## Setup Instructions

### 1. Push to GitHub
If you haven't pushed yet:
```bash
git remote add origin https://github.com/jshiv007shivnath-afk/<YOUR_REPO_NAME>.git
git push -u origin main
```

### 2. Enable GitHub Actions Write Permissions
In your GitHub repository:
1. Go to **Settings** > **Actions** > **General**.
2. Scroll down to **Workflow permissions**.
3. Select **Read and write permissions**.
4. Check **Allow GitHub Actions to create and approve pull requests**.
5. Click **Save**.

### 3. Triggering Manually
You can test the workflow anytime without waiting for the daily cron schedule:
1. Go to the **Actions** tab on your GitHub repository.
2. Select **Daily Contribution Streak Keeper** from the workflows list on the left.
3. Click the **Run workflow** dropdown and press the green **Run workflow** button.
