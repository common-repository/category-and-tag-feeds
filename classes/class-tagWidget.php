<?php

namespace lwCf;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Exception;

/**
 * Object to handle the list-widget for positions.
 *
 * @noinspection PhpUnused
 */
class tagWidget extends Widget_Base {
    /**
     * Class constructor.
     *
     * @param array $data Widget data.
     * @param array $args Widget arguments.
     * @throws Exception
     */
    public function __construct( $data = array(), $args = null ) {
        parent::__construct( $data, $args );
    }

    /**
     * Retrieve the widget name.
     *
     * @return string Widget name.
     */
    public function get_name(): string
    {
        return 'lw-cf-tag-list';
    }

    /**
     * Retrieve the widget title.
     *
     * @return string Widget title.
     */
    public function get_title(): string
    {
        return __( 'List of tag-feeds', 'category-and-tag-feeds' );
    }

    /**
     * Retrieve the widget icon.
     *
     * @return string Widget icon.
     */
    public function get_icon(): string
    {
        return 'eicon-editor-list-ul';
    }

    /**
     * Retrieve the list of categories the widget belongs to.
     *
     * Used to determine where to display the widget in the editor.
     *
     * Note that currently Elementor supports only one category.
     * When multiple categories passed, Elementor uses the first one.
     *
     * @return array Widget categories.
     */
    public function get_categories(): array
    {
        return [ 'general' ];
    }

    /**
     * Register the widget controls.
     *
     * @access protected
     */
    protected function register_controls() {
        $this->start_controls_section(
            'settings_section',
            array(
                'label' => __( 'Settings', 'category-and-tag-feeds' ),
            )
        );

        $this->add_control(
            'rssType',
            [
                'type' => Controls_Manager::SELECT,
                'label' => esc_html__( 'Choose feed-type to show', 'category-and-tag-feeds' ),
                'options' => lw_cf_get_rss_types_for_elementor(),
                'default' => 'linklist',
                'label_block' => true,
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Render the widget output in Elementor and frontend.
     */
    protected function render() {
        echo lw_cf_get_tags( $this->get_settings_for_display() );
    }
}