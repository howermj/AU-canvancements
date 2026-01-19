# AU Canvancements

A **Canvancement** is a small enhancement to the Canvas Learning Management System (Canvas LMS) delivered as a browser-based script. The term was coined by **James Jones** (jamesjonesmath) and popularized through his Canvas Community work and GitHub repository.

This repository, **AU-canvancements**, is a maintained collection of Canvancements selected for continued utility in **Air University Global College (AUGC)** and related Canvas environments (including ASU-hosted Canvas). Scripts here are **curated, updated, and tested** as needed to keep them working and safe to use.

* * *

## Purpose

- Preserve and maintain still-useful Canvancements from upstream sources
- Apply minimal, disciplined updates for reliability, compatibility, and UX
- Provide stable, self-updating install links for faculty/staff users

* * *

## Requirements

To use these scripts you need a userscript manager:

- **Chrome / Brave / Edge**: Tampermonkey (recommended)
- **Firefox**: Violentmonkey (recommended) or Tampermonkey

Once installed, you can install any script below by clicking its **Install** link and confirming in your userscript manager.

* * *

## Script Catalog

| Script Name | Description | Install |
| --- | --- | --- |
| **Access Report Download** | Downloads Access Report (“usage”) data for all students in a course as a CSV from the **People** page overflow (⋮) menu. | [Install](https://github.com/howermj/AU-canvancements/raw/master/access-report-download/access-report-download.user.js "Click to Install") |
| **Sort the Roster** | Enables click-to-sort on any **People (Roster)** table column (click to sort, click again to reverse). Updates as additional users load while scrolling. | [Install](https://github.com/howermj/AU-canvancements/raw/master/sort-the-roster/sort-the-roster.user.js "Click to Install") |

> Install links point to the `master` branch and will auto-update when scripts are improved.

* * *


## Supported Canvas Domains

Most scripts are configured for Canvas instances hosted at:

- `*.instructure.com`
- `*.asu.edu`

If your Canvas uses a different custom domain, you may need to add another `@match` line in the script header (see each script’s README for details).

* * *

## Documentation

Each script folder contains its own README with:

- Provenance (original author + upstream source)
- What the script does / where it appears in Canvas
- Usage notes and expected behavior
- Customization options
- Changelog for AU-maintained updates

* * *

## Provenance and Credit

Many scripts in this repository are based on upstream work by **James Jones** and other Canvas Community contributors. Where applicable, each script README includes the original source link and documents AU-specific changes.

* * *

## Disclaimer

These scripts modify the Canvas web interface in your browser. They are not affiliated with or supported by Instructure.

If you encounter an issue on a Canvas page where a script is active:

1.  Disable the script and retry the action.
2.  If the problem disappears, report it here (GitHub Issues) with the script name and steps to reproduce.
3.  Only contact Canvas Support after confirming the issue occurs **without** the script enabled.

* * *
