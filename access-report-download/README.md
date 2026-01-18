# Access Report Download

### *(formerly Access Report Data)*

This program adds a menu item to the **People (Roster)** page that gathers Access Report data for all students in the course and exports it as a **CSV** file. You may then use a spreadsheet (e.g., a Pivot Table) to analyze the data.

This script has been tested in Firefox, Chrome (and other Chromium-based browsers), and Safari.

* * *

## Provenance

### Original Author

James Jones (jamesjonesmath)

### Upstream Source (Original)

https://github.com/jamesjonesmath/canvancement/tree/5a0290f7b7dd34c9874edc576651057b0c7aa5f8/roster/access-report

### AU Global College Maintainer (Branched Version)

Air University Global College / AU-canvancements  
Maintained in: https://github.com/howermj/AU-canvancements

### Notes

This script is a maintained branch of the upstream canvancement. Changes are documented in the **Changelog** below.

* * *

## About

An **Access Report** is what you get in Canvas when you open **People**, click a student’s name, and select **Access Report**. It shows how many times the student has **viewed** content or **participated** in the course. Canvas normally displays this report for **one student at a time**.

This enhancement retrieves the underlying Access Report (“usage”) data for **all students** in the course and downloads it as a CSV. You will likely need to filter, sort, or pivot the data to make it useful.

**Usage**

1.  Go to **Course → People**
    
2.  Open the **⋮ (Options)** menu
    
3.  Click **Access Report Download**
    
4.  Wait for completion; the CSV will download automatically
    
    - If there is no data to export, the script will display **“No student data to download.”**

**Notes**

- The report may take a while to run, depending on class size.
    
- The menu item is disabled while the report is running.
    
- The script only runs for users who have Canvas permission to read reports (Canvas permission: `read_reports`).
    

* * *

## Customization

This script runs on Canvas instances hosted at `*.instructure.com` or `*.asu.edu` via the `@match` metadata. If your Canvas uses a different custom domain, add another `@match` line (or configure your userscript manager to allow the script on your domain).

Key configuration variables are in the “user configuration section” near the top of the script:

- **showViewStudent** — include/exclude roster “student profile views” (disabled by default to avoid confusing faculty)
    
- **quizParticipation** — adjust quiz view counts to mimic Canvas UI behavior (subtract participations from views)
    
- **enrollmentStates** — which enrollment states to include (e.g., active, completed)
    
- **analytics** — include analytics fields: `'activity'` and/or `'grades'` (leave empty to omit)
    
- **disableMissing** — hide columns that have no data
    
- **headingSpaces** — replace spaces in column headings (examples: `' '` keeps spaces, `''` removes spaces, `'_'` uses underscores)
    
- **multipleSections** — how to represent students enrolled in multiple sections (duplicate rows, first section only, or joined list)
    

Advanced tuning (large courses / rate limits):

- **minTime** / **maxConcurrent** — throttling settings for Canvas API requests
    
- **fetchTimeoutMs** — request timeout in milliseconds
    

* * *

## Changelog

### 2026-01-18

- Renamed to **Access Report Download**.
    
- Added metadata updates for distribution/maintenance (e.g., update/download URL) and expanded domain matching to support Canvas instances hosted at `*.instructure.com` and `*.asu.edu`.
    
- Improved robustness and CSV quality:
    
    - implemented a real fetch timeout
        
    - hardened Link-header pagination parsing
        
    - fixed analytics gating logic
        
    - improved CSV heading space replacement and quoting (including newline-safe quoting)
        
    - added guards to prevent NaN output for empty time fields
        
- Added user feedback when no report data exists: the script now shows a dialog **instead of failing silently**.
