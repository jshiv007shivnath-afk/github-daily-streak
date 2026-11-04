# GitHub Daily Contribution Streak Keeper

Automated daily commit repository designed to keep your GitHub contribution graph active and green, running entirely in the cloud via GitHub Actions.

## Setup Instructions

### 1. Initialize and Push to GitHub
```bash
git init -b main
git add .
git commit -m "chore: initial commit for streak keeper"
git remote add origin https://github.com/jshiv007shivnath-afk/<YOUR_REPO_NAME>.git
git push -u origin main
```

### 2. Enable GitHub Actions Write Permissions
In your GitHub repository:
1. Navigate to **Settings** > **Actions** > **General**.
2. Scroll down to **Workflow permissions**.
3. Select **Read and write permissions**.
4. Check **Allow GitHub Actions to create and approve pull requests** (optional, recommended).
5. Click **Save**.

### 3. Personalizing Contribution Graph Attribution
> [!IMPORTANT]
> GitHub only awards green contribution squares if the author email on the commit matches an email address registered to your GitHub profile.
>
> If you keep `github-actions[bot]@users.noreply.github.com`, the commit will be credited to the bot.
> To credit your profile:
> Edit `.github/workflows/auto-commit.yml`:
> ```yaml
> git config --local user.name "<YOUR_NAME>"
> git config --local user.email "<YOUR_GITHUB_EMAIL>"
> ```

### 4. Triggering Manually
You can test the workflow anytime without waiting for the daily cron schedule:
1. Go to the **Actions** tab on your GitHub repository.
2. Select **Daily Contribution Streak Keeper** from the workflows list on the left.
3. Click the **Run workflow** dropdown and press the green **Run workflow** button.
