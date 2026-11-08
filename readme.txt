=== ArchivesPress: Index Blocks for WordPress ===
Contributors: GDragoN
Donate link: https://buymeacoffee.com/millan
Tags: archives, navigation, index, blocks, elementor
Stable tag: 4.0
Requires at least: 6.7
Tested up to: 7.2
Requires PHP: 8.1
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Help visitors explore your content with archive indexes for dates, authors, categories, tags, and other taxonomy terms.

== Description ==
ArchivesPress helps visitors browse your website through indexes that link to archive pages. Add an index to a page or post using a block, a shortcode, or an Elementor widget.

Choose from three types of index:

* **Dates:** Organize published content by year, month, and day.
* **Authors:** List authors with published content, with optional avatars and post counts.
* **Terms:** List categories, tags, or terms from another public taxonomy, with optional post counts.

Each index can use a basic or compact layout. Depending on the index, you can choose a public post type, change the order, show or hide counts, and customize its appearance. Layouts adapt to smaller screens and support right-to-left languages.

= Blocks =
In the WordPress block editor, find these blocks in the ArchivesPress category:

* Dates Archives Index
* Authors Archives Index
* Terms Archives Index

Select a block to configure it in the block settings sidebar.

= Elementor Widgets =
With Elementor 3.1 or newer active, the same three indexes are available as widgets in the ArchivesPress category. Use the widget's Content tab to choose its data and layout, and the Style tab to adjust typography, colors, padding, and borders.

= Shortcodes =
Use these shortcodes in content that supports WordPress shortcodes:

* Dates: `[archivespress-dates]`
* Authors: `[archivespress-authors]`
* Terms: `[archivespress-terms]`

Shortcode attributes control the data, layout, and styling. For available attributes and examples, visit the [ArchivesPress knowledge base](https://support.dev4press.com/kb/product/archivespress/).

= Home, Knowledge Base, Support and GitHub =
* [ArchivesPress website](https://www.dev4press.com/plugins/archivespress/)
* [Knowledge base and shortcode documentation](https://www.dev4press.com/kb/product/archivespress/)
* [Support forum](https://support.dev4press.com/forums/forum/plugins-free/archivespress/)
* [ArchivesPress on GitHub](https://github.com/dev4press/archivespress)

== Installation ==
= Requirements =
* WordPress 6.7 or newer
* PHP 8.1 or newer

= Installation =
1. Upload the `archivespress` folder to the `/wp-content/plugins/` directory.
2. Activate ArchivesPress through the Plugins screen in WordPress.
3. Add an ArchivesPress block, shortcode, or Elementor widget to a page or post.

== Frequently Asked Questions ==
= Do I need Elementor to use ArchivesPress? =
No. The blocks and shortcodes work without Elementor. The Elementor widgets are available when Elementor 3.1 or newer is active.

= Where can I find the blocks and Elementor widgets? =
Look for the ArchivesPress category in the WordPress block inserter or the Elementor widget panel. Both provide Dates, Authors, and Terms Archives Index options.

= Where can I configure an index? =
Configure each block in the block settings sidebar, each Elementor widget in its Content and Style tabs, or each shortcode through its attributes. ArchivesPress does not add a global settings page.

= Can I use custom post types and taxonomies? =
Yes. Choose a public post type for the index. For a terms index, choose a public taxonomy registered for that post type. Date and author links use the site's standard archive URLs by default; custom post type archives may require site-specific link handling.

= Why is my index empty or missing entries? =
Indexes count published posts without passwords for the selected post type. Make sure matching posts exist. For a terms index, also check that the selected taxonomy belongs to the post type and that matching posts have terms assigned.

= Can I show post counts or author avatars? =
Yes. Each index has count options, and the authors index can display avatars. Use the relevant block or widget controls, or configure the shortcode attributes.

== Changelog ==
= Version: 4.0 / November 8, 2026 =
* New: support for `Elementor` 3.1+
* New: elementor widget: for dates indexes
* New: elementor widget: for authors indexes
* New: elementor widget: for terms indexes
* New: requires `PHP` 8.1 or newer
* Edit: replaced the asset build tooling and updated index styles
* Edit: added a build command for the translation template
* Edit: exclude password-protected posts from archive indexes and counts
* Edit: improvements to the default styling
* Fix: clear cached index data when published posts
* Fix: problem with date archive link filters missing arguments
* Fix: handle term sorting and term archive links more safely
* Fix: remove the wrong CSS class from the terms block

= Version: 3.5 / September 3, 2026 =
* Edit: updated various dependencies

= Version: 3.4 / July 19, 2026 =
* Edit: updated blocks to API version 3
* Edit: updated blocks packages dependencies to WP 6.4

= Version: 3.3 / June 28, 2024 =
* New: updated plugin system requirements
* Edit: reverted blocks packages dependencies and build to WP 6.1
* Fix: minor issue with duplicated directives for multi block
* Fix: block dependencies causing blocks to not load

= Version: 3.2 / March 2, 2024 =
* New: updated plugin system requirements
* Edit: built with the updated core libraries

Full changelog: [ArchivesPress Changelog](https://www.dev4press.com/plugins/archivespress/changelog/)

== Upgrade Notice ==
= 4.0 =
Requires PHP 8.1 or newer. Adds Elementor widgets and fixes several issues. Improves build process.

= 3.4 =
Block source format updated. Various improvements and updates.

= 3.3 =
Various improvements and updates.

= 3.2 =
Various improvements and updates.

== Screenshots ==
1. Examples for the Dates Archives Index
2. Examples for the Author Archives Index
3. Examples for the Terms Archives Index
4. Blocks with Settings in Block Editor
