<?php
if( !defined('GOMYMOBI_INIT') ) exit;

/********************************
$theme_settings		:	Unchangable variable name
	Version			:	Required
	Info			:	Required
		default		:	Required
		en			:	optional
	Pages_Default	:	Required
		Home		:	Required
		Products	:	optional
	Pages_Cutom		:	optional
	Editable_Tags	:	optional - HTML tags that editable with GMM-Editable-HTML-Builder
	Screenshots		:	Required

	Note			:	optional
	Upload_Options	:	optional - used to insert into form fields when attached
	
$theme_settings_custom	: optional
********************************/

$theme_settings = array(
	'Version'	=> '1',
	'Info'		=> array(
		'default' => 'A free HTML bootstrap theme, that perfect for freelancers, creatives, web designer and developers fundraising their open source projects. This site theme has a smooth slick transition between pages and also it comes with black and white pre-made toggle style.',
		),
	
	'Pages_Default'	=> array(
		'Home'    => 'index.html',
		'About'   => 'about.html',
		),
	
	'Pages_Cutom'	=> '',
	
	'Editable_Tags'	=> '.fh5co-list-style-1 li',

	/*
	Screenshots MUST be array
	Pattern:
		1) 'Screenshots'	=> array(
			Index-Number	=> 'Screenshot Caption')
		2) 'Screenshots'	=> array(
			'file-name.extension'	=> 'Screenshot Caption')
	*/
	'Screenshots'	=> array(
		1 => 'Full Height Top Content',
		2 => 'Commercial Licenses Prices',
		3 => 'Fundraising Platforms',
		4 => 'Open Source Progress'
	),

	'Note'	=> '',

	'Upload_Options'	=> array(
		'name'         => 'Open Source vs Commercial Licenses',
		'category'     => '4,8,12,13',
		'downloadable' => 0,
		'public'       => 1,
		'price'        => array(0, 0)
		)
);
?>