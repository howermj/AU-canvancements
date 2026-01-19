# Sort the Roster

This program enables **click-to-sort** on the **People (Roster)** page in Canvas. Click any column heading to sort by that column; click again to reverse the sort. The script also updates sorting as Canvas loads additional users during infinite scroll.

This script has been tested in Firefox, Chrome (and other Chromium-based browsers), and Safari.

* * *

## Provenance

### Original Author

James Jones (jamesjonesmath)

### Upstream Source (Original)

https://github.com/jamesjonesmath/canvancement/tree/master/roster/sort-roster

### AU Global College Maintainer (Branched Version)

Air University Global College / AU-canvancements  
Maintained in: https://github.com/howermj/AU-canvancements

### Notes

This script is a maintained branch of the upstream canvancement. Changes (including Canvas-domain compatibility and minor UX polish) are documented in the **Changelog** below.

* * *

## About

A **course roster** is what you see in Canvas when you open **Course → People**. By default, Canvas sorts it (typically) by name. Canvas also loads the roster dynamically: it renders an initial set of users, then loads more as you scroll.

This enhancement adds reliable sorting behavior by allowing you to click any column header (e.g., **Name**, **Login ID**, **SIS ID**, **Section**, **Role**, **Last Activity**, **Total Activity**) to sort the visible roster table.

**Usage**

1.  Go to **Course → People**
    
2.  Click a column heading to sort
    
3.  Click the same heading again to reverse the sort
    
4.  As you scroll and Canvas loads more users, the sort will update to include them
    

**Notes**

- Canvas loads users in batches (often 50 at a time). If you haven’t scrolled far enough to load all users, sorting only applies to the users currently loaded.
    
- Some columns appear or disappear depending on your role and permissions. The script detects columns dynamically and does not assume a fixed roster layout.
    

* * *

## Customization

This script runs on Canvas instances hosted at `*.instructure.com` or `*.asu.edu` via the `@match` metadata. If your Canvas uses a different custom domain, add another `@match` line (or configure your userscript manager to allow the script on your domain).

There are no required configuration variables for normal use.

Advanced note (for maintainers):

- Canvas renders the People page dynamically and re-renders the roster table during filtering/pagination.
    
- The script uses MutationObservers and a light debounce to avoid “re-init storms” and to update sorting when additional rows are loaded.
    

* * *

## Changelog

### 2026-01-18

- Maintained AU branch: metadata updated for distribution/maintenance (download/update URLs) and expanded domain matching to support Canvas instances hosted at `*.instructure.com` and `*.asu.edu`.
    
- Minor UX polish: headers are visually styled as clickable and show a sort direction indicator for the actively-sorted column.
