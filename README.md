# Format-Menus

WooCommece on Wordpress mis-aligns products vertically. Using some simple DOM-manipulation, this script loops through each product per-page 
and finds the one with the largest height(clientheight), and matches all the products to the same height. This is useful because it 
minimizes the amount of white-space between the title and the Add To Cart button*.


*The add to cart buttons should be aligned using 'flex-align: baseline' in the site's css.

