# Install and update ArchivesPress

<!-- category: plugin-setup -->
<!-- prefix: setup -->
<!-- tag: install,update -->
<!-- seo-title: %%post_title%% - %%sitetitle%% -->
<!-- seo-description: Install and update ArchivesPress on your WordPress site. -->
<!-- seo-keywords: archivespress,install,update -->

This guide describes ArchivesPress 4.0, which requires WordPress 6.7 or newer and PHP 8.1 or newer. Elementor 3.1 or newer is required only for its widgets. Check the package version before installing or updating.

You need a WordPress account with permission to install and update plugins. Make a current backup of your site before installing or updating.

## Install from the WordPress plugin directory

1. In the WordPress administration area, open **Plugins → Add New Plugin**.
2. Search for **ArchivesPress** and find **ArchivesPress: Index Blocks for WordPress**.
3. Select **Install Now**, then **Activate** when installation finishes.

## Install from a ZIP file

1. Download the ZIP package from the [ArchivesPress page on WordPress.org](https://wordpress.org/plugins/archivespress/).
2. In WordPress, open **Plugins → Add New Plugin** and select **Upload Plugin**.
3. Choose the ZIP file without extracting it, select **Install Now**, and then select **Activate Plugin**.

If you install files manually, extract the package and upload the `archivespress` folder to `wp-content/plugins/`. Then activate ArchivesPress on the WordPress **Plugins** screen.

## Update ArchivesPress

When an update is available, WordPress displays it on the **Plugins** or **Dashboard → Updates** screen. Back up the site, select the ArchivesPress update, and wait for WordPress to finish.

To update from a ZIP file, download the newer package and open **Plugins → Add New Plugin → Upload Plugin**. Choose the ZIP file and select **Install Now**. When WordPress recognizes the installed plugin, review the versions and confirm the replacement. Check that ArchivesPress is active afterwards.

## After installation or an update

ArchivesPress does not add a global settings page. Add an index to a page or post using a [block](blocks-support.md), an [Elementor widget](elementor-support.md), or a shortcode. Configure each index where you insert it.

After updating, open a page containing an index and check its appearance and archive links on the front end. If an index is empty or its links lead to unexpected content, see [troubleshooting](troubleshooting.md).

