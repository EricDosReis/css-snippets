# css-snippets
My useful CSS snippets.

## Grids
A mobile first powerful multi-device grid. If you are familiar with grid systems, you will feel right at home. If not, you will learn quickly.

### Normal grid

```html
<section class="row">
  <div class="col sm-100 md-33 center">
    <p>
      100% for small devices (< 768px) and 33.333% centered for medium devices or greater (> 768px).
    </p>
  </div>

  <div class="col sm-100 md-33 lg-50">
    <p>
      100% for small devices (< 768px), 33.333% for medium devices (> 768px < 1024px) and 50% for large devices or greater (> 1024px).
    </p>
  </div>

  <div class="col sm-100 md-33 lg-50">
    <p>
      100% for small devices (< 768px), 33.333% for medium devices (> 768px < 1024px) and 50% for large devices or greater (> 1024px).
    </p>
  </div>
</section>
```
*Note: You can create your own media queries sizes and classes.*

#### Nesting

You can nest the grids indefinitely:

```html
<footer class="row">
  <div class="sm-100 md-50">
    <h3>Find us</h3>

    <div id="map" class="map"></div>
  </div>

  <div class="sm-100 md-50">
    <h3>Contact us</h3>

    <form method="post">
      <div class="row">
        <div class="sm-100 md-50">
          <label for="name">Name</label>

          <input type="text" id="name">
        </div>

        <div class="sm-100 md-50">
          <label for="email">E-mail</label>

          <input type="email" id="email">
        </div>
      </div>

      <div class="row">
        <div class="sm-100">
          <button>Send<button>
        </div>
      </div>
    </form>

  </div>
</footer>
```

### Block grid

If you want a fixed number of items per line, then use the Block Grid approach:

```html
<section class="sm-block-grid-1 md-block-grid-2 lg-block-grid-4">
  <figure class="col">
    <img src="image/path/img-1.jpg" alt="Image description 1">

    <figcaption>Figure caption 1</figcaption>
  </figure>

  <figure class="col">
    <img src="image/path/img-2.jpg" alt="Image description 2">

    <figcaption>Figure caption 2</figcaption>
  </figure>

  <figure class="col">
    <img src="image/path/img-3.jpg" alt="Image description 3">

    <figcaption>Figure caption 3</figcaption>
  </figure>

  <figure class="col">
    <img src="image/path/img-4.jpg" alt="Image description 4">

    <figcaption>Figure caption 4</figcaption>
  </figure>
</section>
```

### Gutters

The size of the grid gutter between columns and edges in a row is 1em.

## Modifiers
Some useful modifiers, with BEM Style nomenclatures

### Paddings and Margins

```html
<section class="my-container padding-horizontal">
  <p>
    Container with 1em of padding in the left and right ...
  </p>

  <p class="margin-vertical">
    Paragraphy with 1em of margin in the top and bottom
  </p>

  <p class="margin-vertical-2x">
    Paragraphy with two times more vertical margin.
  </p>

  <p class="padding">
    Paragraphy with 1em of padding.
  </p>
</section>
```

### Alignments

```html
<form method="post">
  <div class="row">

    <!-- The element must have a width to be centered. The sm-50 class is not necessary -->
    <img class="sm-50 center" src="image/path/img-1.jpg" alt="My centered image">

    <div class="sm-100 md-50">
      <label for="name">Name</label>

      <input type="text" id="name">
    </div>

    <div class="sm-100 md-50">
      <label for="email">E-mail</label>

      <input type="email" id="email">
    </div>

    <!-- Left and right align -->
    <input class="sm-33 left" type="reset" value="Clear">
    <input class="sm-33 right" type="submit" value="Send">

  </div>
</form>
```

#### Middle alignment

```html
<section class="middle-align">
  <p class="middle-align__inner">
    Content aligned in the middle.
  </p>
</section>
```

#### Vertical alignment

```html
<section class="vertical-align">
  <p class="vertical-align__inner">
    Content aligned vertically.
  </p>
</section>
```

### Displays

```html
<section class="my-container">
  <h1>Galery image</h1>
  <img class="block" src="image/path/main-img.jpg" alt="Main image with display block">

  <img class="inline-block" src="image/path/img-1.jpg" alt="Image with display inline-block">
  <img class="inline-block" src="image/path/img-2.jpg" alt="Image with display inline-block">
  <img class="inline-block" src="image/path/img-3.jpg" alt="Image with display inline-block">
</section>
```

### Typography

```html
<h1>
  My CSS <span class="text--italic">snippets</span>
</h1>

<p class="text--center text--lowercase">
  Paragraphy centered and  text lowercase.
</p>

<p class="text--justify text--uppercase">
  Paragraphy justified and text uppercase.
</p>

<p class="text--left text--small">
  Paragraphy aligned to left and text small.
</p>

<p class="text--right text--big">
  Paragraphy aligned to right and text big.
</p>

<figure>
  <img src="image/path/img-1" alt="Image description">

  <figcaption class="text--bold">Figure caption with bold text</figcaption>
</figure>

<p class="text--capitalize">
  rodney mullen, daewon song, chris cole and corey duffel.
</p>

<p class="text--truncated">
  Long paragraphy with <span class="text--italic">lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
</p>
```

### Lists

#### Inline list

```html
<ul class="list--inline">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### Centered list

```html
<nav class="list--centered">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</nav>
```

#### Unstyled list

List without markers and default padding:

```html
<ul class="list--unstyled">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Miscs

#### Full width

```html
<button class="full-with">
  Button with width 100%
</button>
```

#### Radius and rounding

```html
<button class="radius">
  Button with border radius
</button>

<button class="rounded">
  Rounded button
</button>
```
