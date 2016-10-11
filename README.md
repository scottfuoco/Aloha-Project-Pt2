# Project 1 - Aloha Apparel - Pt2
<p align="center">
![Aloha Image](aloha.png)
</p>
---

# Summary / Purpose

[Aloha Apparel](https://scottfuoco.github.io/Aloha-Project-Pt2/) is a mockup of a fictional e-commerce website written in HTML5, CSS3, and Javascript with the help of jQuery.

It can be a useful reference for the following:
* Positioning containers and elements with CSS3 Flexbox
* Usage of the CSS position properties relative and absolute for text or the item counter on the cart icon
* Setting up a jQuery Slider
* Importing and rendering custom fonts
* Using media queries to design a website using the Mobile First design principle

---

# Technologies Used
* HTML5
* CSS3 - with all flexbox and no floats
* Javascript with jQuery

---

# Major Learnings
* Using 
        box-sizing: border-box
    makes height and width calculations for containers include the padding and border.  In the Products section this allows the use of a border to be used to give the white space between the elements, with that border being included in the width.  Initially I was using a margin for the white spacing and I had to use the percentage width of the containers using the css calc method. I.e. calc(50% - 10px) where 50% was the width of the container and removing 10px to include space for the border of 5px on either side.  By using the box-sizing: border-box and the border of 5px that is now included in the elements width calculation and I was able to remove the css calc().

* Firefox collapses % padding and height on flexed containers resulting in 0 height.  So in the Products section I was unable to use padding-bottom to give the flexed `<li>`'s a % height based off of the parent `<ul>`'s width.  To fix this issue I used the sudo selector :after to put an invisible block at the end of the `<li>` tags.  This tag was then given a display: table instead of being flex.  With the display: table Firefox was able to take the padding-bottom percentage and fill out the container.

# TODO
* Add additional comments to style.CSS