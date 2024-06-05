# Ideas

## 2 modes:

1. Progress Mode
    - Element will change to a blue background
    - Happens whenever the full div is clicked
    - No course will be locked, since it's possible (but rare) that someone already made it without the prerequisite
    - The possibility of adding a new class (coursing the subject) is being studied
    - Possible classes:
        - `finished` - When the course is finished
        - `unlocked` - When the course is already unlocked
2. Exploration Mode:
    - The prerequisites and courses it unlocks will have it's style changed
    - Happens whenever the mouse hoves over, or when clicks the "i" (info) button
    - Possible classes:
        - `active` - When the course is clicked and you want to see the prerequisites and the courses it unlocks
        - `required` - When the course is a prerequisite to the clicked one
        - `unlocks` - When the course is unlocked by the clicked course

## To Do :

-   [ ] Create Readme.md

### Styles to change/add:

-   [ ] Customize scroll bar (for now)
-   [ ] checkbox (check_semester)
-   [ ] Sidebar

### Features to add:

-   Progress bar/percentage (A progress in the bottom, that occupies 100% horizontally, maybe 20 or 30px of height, and goes from black to green when concluded)
-   Hours concluded
-   Add a "current semester" feature
