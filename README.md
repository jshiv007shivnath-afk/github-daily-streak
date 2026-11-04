# GitHub Daily Contribution Streak Keeper

Automated daily commit repository designed to keep your GitHub contribution graph active and dark green with **50 to 200 contributions every single day**, running entirely in the cloud via GitHub Actions.

## Features
- **50 to 200 Commits Daily**: Automatically creates a randomized batch of 50 to 200 commits (kabhi 50, kabhi 100, kabhi 150, max 200) every day.
- **Daily 9:00 AM IST Schedule**: Runs automatically at 09:00 AM IST (`30 3 * * *` UTC).
- **Personalized Attribution**: Configured for `jshiv007shivnath-afk` (`jshiv007.shivnath@gmail.com`).
- **Cloud Execution**: Runs independently on GitHub's servers whether your local PC is on or off.
- **Manual Trigger**: Option to trigger on-demand via `workflow_dispatch` with a custom commit count if desired.

---

## Setup Instructions

### 1. Enable GitHub Actions Write Permissions
In your GitHub repository:
1. Go to **Settings** > **Actions** > **General**.
2. Scroll down to **Workflow permissions**.
3. Select **Read and write permissions**.
4. Check **Allow GitHub Actions to create and approve pull requests**.
5. Click **Save**.

### 2. Triggering Manually
You can test the workflow anytime without waiting for the 9:00 AM schedule:
1. Go to the **Actions** tab on your GitHub repository: [Actions](https://github.com/jshiv007shivnath-afk/github-daily-streak/actions).
2. Select **Daily Contribution Streak Keeper** from the workflows list on the left.
3. Click the **Run workflow** dropdown and press the green **Run workflow** button.
