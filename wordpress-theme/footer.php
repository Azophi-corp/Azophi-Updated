<?php
/**
 * The template for displaying the footer
 */
?>

<footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
                <?php if(has_custom_logo()): ?>
                    <?php the_custom_logo(); ?>
                <?php else: ?>
                    <div class="text-2xl font-bold text-white mb-6"><?php bloginfo('name'); ?></div>
                <?php endif; ?>
                
                <p class="text-gray-400 mb-6"><?php echo get_theme_mod('footer_description', 'Your trusted partner for innovative IT solutions and managed services.'); ?></p>
                
                <div class="flex space-x-4">
                    <?php if(get_theme_mod('social_facebook')): ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_facebook')); ?>" class="text-gray-400 hover:text-white transition-colors">
                            <i data-lucide="facebook" class="w-5 h-5"></i>
                        </a>
                    <?php endif; ?>
                    <!-- Add other social icons similarly -->
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-6"><?php _e('Services', 'azophi'); ?></h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-1',
                    'menu_class' => 'space-y-3',
                    'container' => false,
                    'fallback_cb' => false,
                ));
                ?>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-6"><?php _e('Company', 'azophi'); ?></h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-2',
                    'menu_class' => 'space-y-3',
                    'container' => false,
                    'fallback_cb' => false,
                ));
                ?>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-6"><?php _e('Contact', 'azophi'); ?></h3>
                <ul class="space-y-4">
                    <?php if(get_theme_mod('contact_address')): ?>
                        <li class="flex items-start">
                            <i data-lucide="map-pin" class="mr-3 text-blue-500 flex-shrink-0 mt-1 w-[18px] h-[18px]"></i>
                            <span class="text-gray-400"><?php echo nl2br(esc_html(get_theme_mod('contact_address'))); ?></span>
                        </li>
                    <?php endif; ?>
                    
                    <?php if(get_theme_mod('contact_phone')): ?>
                        <li class="flex items-center">
                            <i data-lucide="phone" class="mr-3 text-blue-500 flex-shrink-0 w-[18px] h-[18px]"></i>
                            <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone')); ?>" class="text-gray-400 hover:text-white transition-colors">
                                <?php echo esc_html(get_theme_mod('contact_phone')); ?>
                            </a>
                        </li>
                    <?php endif; ?>
                    
                    <?php if(get_theme_mod('contact_email')): ?>
                        <li class="flex items-center">
                            <i data-lucide="mail" class="mr-3 text-blue-500 flex-shrink-0 w-[18px] h-[18px]"></i>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email')); ?>" class="text-gray-400 hover:text-white transition-colors">
                                <?php echo esc_html(get_theme_mod('contact_email')); ?>
                            </a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm">
                    © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('All rights reserved.', 'azophi'); ?>
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-3',
                        'menu_class' => 'flex space-x-6',
                        'container' => false,
                        'fallback_cb' => false,
                    ));
                    ?>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    document.querySelector('.mobile-menu-button').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
</script>

</body>
</html>