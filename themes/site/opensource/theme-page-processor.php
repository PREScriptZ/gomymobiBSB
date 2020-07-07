<?php
if( !defined('GOMYMOBI_INIT') || !isset($GMM_page_dom) ) exit;

// remove class attr of HTML tag
$tag = $GMM_page_dom->find('html', 0);
if( count($tag)>0 )
{
	$tag->setAttribute('class', 'no-js')->removeAttribute('style, xmlns');
}

// remove class attr of body tag
$elements = $GMM_page_dom->find('body, .fh5co-loader');
if( count($elements)>0 )
{
	foreach($elements as $element)
	{
		$element->removeAttribute('style');
	}
}

// process slides
$elements = $GMM_page_dom->find('.flexslider');
if( count($elements)>0 )
{
	foreach($elements as $element)
	{
		foreach ($element->find('.slides, li') as $slide)
		{
			$slide->removeAttribute('style');
		}
		$element->innertext = PHP_EOL . $element->find('.slides', 0)->outertext . PHP_EOL;
	}
}

// remove added class of animated
$elements = $GMM_page_dom->find('.animate-box');
if( count($elements)>0 )
{
	foreach($elements as $element)
	{
		$element->removeClass('animated, fadeInUp');
		$element->removeAttribute('style');
	}
}

// remove elements
$elements = $GMM_page_dom->find('.flex-direction-nav');
if( count($elements)>0 )
{
	foreach($elements as $element)
	{
		$element->outertext = '';
	}
}
?>