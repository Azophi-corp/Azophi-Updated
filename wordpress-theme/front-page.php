<?php
get_header();
?>

<main>
    <!-- Hero Section -->
    <div class="pt-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div class="container mx-auto px-4 md:px-8 py-20 md:py-32">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="animate-fade-in">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        <?php echo get_theme_mod('hero_title', 'Innovative IT Solutions for Business Growth'); ?>
                    </h1>
                    <p class="text-lg md:text-xl text-blue-100 mb-8">
                        <?php echo get_theme_mod('hero_description'); ?>
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="<?php echo get_theme_mod('hero_primary_button_url', '#contact'); ?>" class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                            <?php echo get_theme_mod('hero_primary_button_text', 'Build your IT Strategy'); ?>
                        </a>
                        <a href="<?php echo get_theme_mod('hero_secondary_button_url', '#services'); ?>" class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md border-2 border-white text-white hover:bg-white/10 transition-colors">
                            <?php echo get_theme_mod('hero_secondary_button_text', 'Learn More'); ?>
                        </a>
                    </div>
                </div>
                <div class="animate-fade-in">
                    <?php
                    if(get_theme_mod('hero_image')):
                        echo wp_get_attachment_image(get_theme_mod('hero_image'), 'full', false, array(
                            'class' => 'rounded-lg shadow-2xl w-full object-cover',
                            'alt' => 'IT Professionals collaborating'
                        ));
                    endif;
                    ?>
                </div>
            </div>
        </div>
        
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,106.7C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
    </div>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 md:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6"><?php echo get_theme_mod('services_title', 'Our Comprehensive Services'); ?></h2>
                <p class="text-gray-600 text-lg"><?php echo get_theme_mod('services_description'); ?></p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $services = new WP_Query(array(
                    'post_type' => 'service',
                    'posts_per_page' => 6
                ));

                while($services->have_posts()): $services->the_post();
                ?>
                    <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <?php if(get_field('service_icon')): ?>
                            <div class="bg-blue-100 p-4 rounded-full mb-6 text-blue-600 w-fit">
                                <i data-lucide="<?php echo esc_attr(get_field('service_icon')); ?>" class="w-7 h-7"></i>
                            </div>
                        <?php endif; ?>
                        
                        <h3 class="text-xl font-semibold mb-3"><?php the_title(); ?></h3>
                        <p class="text-gray-600 mb-4"><?php echo get_the_excerpt(); ?></p>
                        <a href="<?php the_permalink(); ?>" class="text-blue-600 font-medium hover:text-blue-800">
                            Learn More →
                        </a>
                    </div>
                <?php
                endwhile;
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <?php get_template_part('template-parts/content', 'benefits'); ?>

    <!-- Testimonials Section -->
    <?php get_template_part('template-parts/content', 'testimonials'); ?>

    <!-- Contact Section -->
    <?php get_template_part('template-parts/content', 'contact'); ?>
</main>

<?php
get_footer();