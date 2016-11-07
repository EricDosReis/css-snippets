# Grids
A mobile first powerful multi-device grid. If you are familiar with grid systems, you will feel right at home. If not, you will learn quickly.

## Normal grid

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

### Nesting

You can nest the grids indefinitely.

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