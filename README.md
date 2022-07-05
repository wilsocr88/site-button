# SiteButton.JS

Create Geocities-style [88x31-pixel site buttons](https://cyber.dabamos.de/88x31/) in pure HTML using a custom [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Usage

-   Include the JavaScript in your HTML with a 'defer' attribute:

```html
<script src="SiteButton.js" defer></script>
```

-   And use the custom element:

```html
<site-button
    icon="icon.png"
    text="My Great Site"
    background="#008080"
    textColor="white"
    font="Times New Roman"
></site-button>
<site-button
    img="buttonBackground.png"
    text="My site!"
    textColor="#fff"
></site-button>
```

### Attributes

|  Attribute |                                                                                                  Description |
| ---------: | -----------------------------------------------------------------------------------------------------------: |
|        img |                                               Use image in place of background. Image will resize to 88x31px |
| background |                                                               CSS background color to display on site button |
|       icon | The SRC of the image to use as the site button's icon (small image displayed on the left side of the button) |
|       text |                                                     The text to display on the right side of the site button |
|  textColor |                                                                                 CSS color of the button text |
|       font |                                                                                  CSS font of the button text |
