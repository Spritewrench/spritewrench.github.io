
--------------------------------------------------------------------------------
	Terrain Icons
--------------------------------------------------------------------------------

- Introduction & Contact
- License
- Contents
- Content Structure
- Specification
- How to Use
- How to Use: Terrain Icon Source File
- How to Use: Mini Icon Source File
- Krita
- Modifications

--------------------------------------------------------------------------------
	Introduction & Contact
--------------------------------------------------------------------------------

Hey there!

Thanks a lot for buying my little Terrain Icons. The set was sponsored by
Steve Wright ( https://deusexminima.com/ ), so thank him too! The icons are
a great addition to any print product or video game. Whatever your intention
on using them is, I hope you have as much fun as I had creating them!

By the way, the style of the terrain icons fits very well with my asset pack
"Isle of Lore 2: Hex Tiles Regular":

https://stevencolling.itch.io/isle-of-lore-2-hex-tiles-regular

If you encounter any problem, got a question or have some feedback,
you can reach me easily via mail (see below).

I may update this asset pack (at no additional cost) in the future
and if you want to keep up-to-date and learn more about my other game-related
projects, you can subscribe to my mailing list or join my Discord.

	Mailing List: 	https://mailinglist.stevencolling.com/game_assets/
	Discord:		http://discord.stevencolling.com
	Mail:			info@stevencolling.com
	Website:		https://www.stevencolling.com

See you there!
Steven Colling

--------------------------------------------------------------------------------
	License
--------------------------------------------------------------------------------

Depending on where you bought this asset, the store may provide
license terms for the assets they sell, including this one. If that's not the
case, you'll find a "License.txt" file in the topmost directory. Please refer
to either the storefront's asset license or to the license file provided with
the assets. If you think the seller's license is too restricting for your usage,
please reach out via mail: info@stevencolling.com.

--------------------------------------------------------------------------------
	Contents
--------------------------------------------------------------------------------

The Terrain Icons pack contains...

- 20 Terrain Icons in multiple variants
	- Mountain, Forest, Hills, Grassland, Swamp, Arctic, Aquatic, Ship, Coast,
	  Aloft, Desert, Cavern, Inn, Space, Temple, Village, Town, City, Castle,
	  Manor
- 20 Mini Icons in multiple variants
	- with the same terrain types as above
	
With all the variants included, there are...

- 1980 Image Files (png)
	- 1800 Terrain Icons (png)
		- 20 icons x 90 variants
	- 180 Mini Icons (png)
		- 20 mini icons x 9 variants

- 99 Sprite Sheets (png; image files compiled)
	- 90 Terrain Icon Sprite Sheets
	- 9 Mini Icon Sprite Sheets

- 2 Source Files (both as Krita .kra and Photoshop .psd)
	- 1 Terrain Icon Source File (Showcase_icons.kra; all terrains in there)
	- 1 Mini Icon Source File (Showcase_minis.kra; all terrains in there)

--------------------------------------------------------------------------------
	Content Structure
--------------------------------------------------------------------------------

In the topmost directory:

./Images				all terrain icons and mini terrain icons as png files
./Images/Icons			all terrain icons
							every variant has its own sub-folder
./Images/Minis			all mini terrain icons
							every variant has its own sub-folder
./Sprite Sheets			all the images compiled in sprite sheets
Changelog.txt			logging the asset pack's changes
License.txt				see "License" section above
README.txt				this file
Showcase_icons.kra		source file of the terrain icons
Showcase_icons.png		png export
Showcase_icons.psd		psd export
Showcase_minis.kra		source file of the mini terrain icons
Showcase_minis.png		png export
Showcase_minis.psd		psd export

--------------------------------------------------------------------------------
	Specification
--------------------------------------------------------------------------------


> File Name Structure <


The file name of a Terrain Icon image file is constructed as such:

icons_(palette)_(shape)_(border)_(label)_(name).png

palette:
	standard: colored
	grayscale: using 4 shades only
	bw: black and white
shape:
	square
	diamond
	circle
border:
	inner: only a thin dark border around the icon
	both-light: two lines marking a thick border, filled with the light color
	both-dark: two lines marking a thick border, filled with the dark color
	both-colored: two lines marking a thick border, filled with a color
		(this variant exists only for the standard palette and not grayscale/bw)
label:
	none: no label placed on top
	small: a small label on top
	big: a label with a bigger border and font on top
name:
	the name of the terrain, e.g. "mountain", "forest", "hills" etc.

The file name of a Mini Terrain Icon is constructed similar, but without
a border or label:

minis_(palette)_(shape)_(name).png

The sprite sheet names are similar in structure, too, omitting the name part
at the end:

icons_(palette)_(shape)_(border)_(label).png
minis_(palette)_(shape).png


> Dimensions <


.........................................................................
Terrain Icons
Shape		Border		Label		Dimension (width and height in px)
.........................................................................
square		inner		none		386 384
square		inner		small		428 384
square		inner		big			468 384
square		both		none		446 444
square		both		small		446 444
square		both		big			468 444

diamond		inner		none		382 400
diamond		inner		small		428 400
diamond		inner		big			468 400
diamond		both		none		446 470
diamond		both		small		446 470
diamond		both		big			468 470

circle		inner		none		376 376
circle		inner		small		428 376
circle		inner		big			468 376
circle		both		none		442 442
circle		both		small		442 442
circle		both		big			468 442

.........................................................................
Mini Terrain Icons
Shape								Dimension (width and height in px)
.........................................................................
square								149 153
diamond								149 152
circle								143 149


> Color Palette <


Light			#efefef
Medium Light	#d2d2d2
Medium Dark		#a5a5a5
Dark			#696a6d
Blue Light		#909b97
Blue Dark		#748481
Brown			#867472
Green Light		#dfdf86
Green Medium	#b6bb7d
Green Dark		#7f8a78
Red				#ff777c
Yellow			#ffda82


> Krita <


For all linework I used the "Ink-2 Fineliner" pen. The size depends
on the use case:

Terrain Icon Linework:			15px
Mini Terrain Icon Linework:		20px
Thin Label Lines and Names:		10px

--------------------------------------------------------------------------------
	How to Use
--------------------------------------------------------------------------------

> Terrain Icons <

The terrain icons make great buttons or biome indicators in a video game. In a
print product, they could be used in a chapter header or as indicators so
players can have a quick glance on what type of biome or adventure lies ahead.
Using them in a legend for a map or in connection with the mini icons in
relation to a body of text are other great use cases, too.

Please make sure that if you scale down the icons, that the labels are still
legible. If not, switching to a variant without labels or using the mini icons
instead, would be recommended.

The grayscale variant only uses 4 shades instead of just putting a grayscale
filter on the icons, which would result in more shades as, for example, the
blue of the mountain and the green of the forest would result in different
shades. Try out both and decide for yourself what you like, but I would use
the delivered grayscale variant for a clearer picture.

The black and white style is only recommended in cases where you want to go
for a harsher style, as especially the mini icons are way less legible
than their grayscale counterparts.

> Mini Terrain Icons <

The mini icons are meant to be used within a body of text, and not as
standalone icons in their full size. You could reference a biome or a special
locations and mark the name with the icon in front, for example
"<Village-Icon> Hayfork" to reference a village named Hayfork in text. Please
make sure that the icon doesn't alter the line's height, but so the lines above
and below flow naturally around the icon!

--------------------------------------------------------------------------------
	How to Use: Terrain Icon Source File
--------------------------------------------------------------------------------

Open the file "Showcase_icons.kra" (or psd) to open the source file.


> Structure <


On the very top level, there are two groups:

	ICON			all the icon layers
	BACKGROUND		the showcase's background and additional information like
					the title and the palette at the top
					(hide this when exporting!)

Within the ICON group, you'll find 4 more groups:

	LABEL			the label text displayed on top
	BORDER			the icon's border styles
	ICON			the actual icon linework and coloring
	BACKGROUND		the icons' background filling

The LABEL group has two groups:

	LABEL: BIG		the big, strong label;
					Within this group, you have the "name" layer with all icons'
					names. There are 2 more groups STRONG and THIN, for a strong
					and a thin outlining used in combination with the strong
					label texts. The exports use the STRONG group, the THIN
					group is there for the case someone might like it and want
					to export it, but I would strongly recommend to use STRONG
					together with the strong names.
	LABEL: SMALL	the small, thin label;
					The labels are constructed with multiple layers to make
					adaptations like different fillings easier to achieve.

The BORDER group has groups for the borders of different shapes:

	CIRCLE			the border styles for the circle shape;
					By making different layers in there visible or hiding them,
					you can achieve a lot of different border styles, way more
					than in the exports delivered in the pack. "inner" is the
					the line close to the icon, while "outer" is a bit spaced
					away from the inner border. The 3 fill layers allow for
					different fills (light, dark, colored). You could, for
					example, hide the "inner" and "outer" and only make
					"fill light" visible, for more variations.
	SQUARE			same as CIRCLE above, but for the square shape
	DIAMOND			same as CIRCLE above, but for the diamond shape;
					There are 3 special layers starting with the word "small",
					like "small fill light". They are not meant to be used with
					the "inner" and "outer" borders, but displayed when "inner"
					and "outer" are hidden, to achieve a border-filling-only
					style close to the other groups. This special treatment
					was necessary given how the diamond shape uses its borders.

The ICON group consists of 3 masks as well as 6 groups:

	MASK: CIRCLE		hides everything outside the circle shape if visible
	MASK: SQUARE		like the circle mask, but for the square shape
	MASK: DIAMOND		like the diamond mask, but for the diamond shape
	
		!!! Important note regarding the masks. To activate one of the masks, you
		have to move the mask out of the group (one above), like it is the case
		with the square mask when you open the showcase for the first time. In
		Krita you can have all three of them moved up, delete the then empty mask
		groups and use the masks by turning their visibility on and off. The reason
		why they are separated in sub-groups is in regard to the Photoshop export:
		there is some issue that when multiple masks are on the same group-layer,
		all of them vanish when exporting to psd. Sorry about that!
	
	LINEWORK: BW		additional white lines on top of the icons which should be
						only used in combination with the FILLING: BW (black and
						white filling), otherwise hidden!
	LINEWORK:			the actual linework of all icons
	FILLING: TEMPLATE	dummy group in case you want to make your own fillings
	FILLING: BW			the icon fillings for the bw (black and white) style;
						Don't forget to make LINEWORK: BW visible when using this!
	FILLING: GRAYSCALE	the icon fillings for the grayscale style
	FILLING: STANDARD	the icon fillings for the standard (colored) style, with
						every terrain having its own sub-group

Finally, there is the BACKGROUND group, consisting of the background fillings
of the icons, for the shapes CIRCLE, SQUARE and DIAMOND.


> Exporting <


1.	Hide the BACKGROUND group on the top level, so everything except the icons
	is transparent.
2.	Decide the shape (circle, square, diamond) you want to use, e.g. CIRCLE:
	a)	make CIRCLE in the ICON/BORDER group visible and the others invisible
	b)	make CIRCLE in the ICON/BACKGROUND group visible and the others invisible
	c)	make "mask circle" in the ICON/ICON group visible and
		the other masks invisible.
3.	Decide the color palette (standard, grayscale, bw) you want to use and make
	the corresponding FILLING group in ICON/ICON visible and the other FILLING
	groups invisible.
4.	If you use the bw (black and white) filling style, make sure "LINEWORK: BW"
	in ICON/ICON is visible, and invisible otherwise(!).
5.	Configure the border in ICON/BORDER how you like, or hide them.
6.	Configure the label in ICON/LABEL how you like, or hide them.
7.	Export to png or copy them directly out by selecting the topmost ICON group
	in Krita and using the Rectangular Selection Tool (CTRL+R). Tip: create
	an empty file with the file dimensions shown in the Specification chapter
	in this readme file or use a similar icon file and then copy your new icon
	over.

--------------------------------------------------------------------------------
	How to Use: Mini Icon Source File
--------------------------------------------------------------------------------

Open the file "Showcase_minis.kra" (or psd) to open the source file.

The structure and export workflow are identical to the terrain icon source file,
explained above. The main difference is, that the mini icons don't have any
labels and only one type of border. For export, make sure to hide the showcase's
background and turn on/off the MINI-ICON/BORDER and MINI-ICON/BACKGROUND groups
corresponding to the shape you are going for as well as the corresponding mask
in MINI-ICON/ICON and the FILLING group you want. Again, for the bw
(black and white) style, the group LINEWORK: BW needs to be turned on, and off
otherwise.

--------------------------------------------------------------------------------
	Krita
--------------------------------------------------------------------------------

The files were originally made with the free (and amazing) painting software
Krita, available at krita.org. There are also Photoshop exports available. If
you encounter a problem with those exports, please let me know!

--------------------------------------------------------------------------------
	Modifications
--------------------------------------------------------------------------------

Warning: if you make changes to the files, please copy the files to a different
location first, before you download a new version of the assets and hence
accidentally overwrite your modifications.





Thank you!