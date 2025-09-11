<?php
/**
 * The header for our theme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class('min-h-screen bg-white'); ?>>
<?php wp_body_open(); ?>

<header class="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 bg-transparent">
    <div class="container mx-auto">
        <nav class="flex items-center justify-between">
            <?php
            if(has_custom_logo()):
                the_custom_logo();
            else:
            ?>
                <div class="flex items-center">
                    <img src="<?php echo get_template_directory_uri(); ?>/azophi-logo.jpg" alt="<?php bloginfo('name'); ?>" class="h-10 w-auto">
                </div>
            <?php endif; ?>

            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'hidden md:flex items-center space-x-8 text-white',
                'container' => false,
                'fallback_cb' => false,
                'link_before' => '<span class="text-white font-medium hover:text-blue-200 transition-colors">',
                'link_after' => '</span>',
            ));
            ?>

            <button class="md:hidden mobile-menu-button">
                <i data-lucide="menu" class="h-6 w-6 text-white"></i>
            </button>
        </nav>
    </div>
</header>

<div class="mobile-menu hidden fixed inset-0 bg-white z-50 p-8 pt-24 md:hidden">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'primary',
        'menu_class' => 'space-y-6 text-gray-900',
        'container' => false,
        'fallback_cb' => false,
    ));
    ?>
</div>