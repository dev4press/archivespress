# Troubleshooting

<!-- category: troubleshooting -->
<!-- prefix: archivespress -->
<!-- tag: troubleshooting,archives -->
<!-- seo-title: %%post_title%% - %%sitetitle%% -->
<!-- seo-description: Troubleshoot missing indexes and archive links in ArchivesPress. -->
<!-- seo-keywords: archivespress,troubleshooting -->

## An index is empty

Check that the chosen post type is public and has published, non-password-protected posts. For a terms index, also check that the taxonomy is public, registered for that post type, and assigned to those posts. An invalid selection or no matching data produces no index.

## The archive link shows unexpected content

Date and author links normally use WordPress's standard archive URLs. A custom post type may need site-specific link handling. Check the destination archive as well as the index's selected post type. Term links normally use the term archive.

## Elementor widgets are missing

Confirm that Elementor is active and at least version 3.1. Blocks and shortcodes are available without Elementor.

## Counts appear out of date

ArchivesPress caches index data and clears the affected caches on relevant post and term changes; author profile updates clear author caches. Check the post status, password, post type, and term assignments first.

