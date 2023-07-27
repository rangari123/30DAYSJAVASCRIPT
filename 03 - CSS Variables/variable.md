# Scoped CSS Variables and JS

This project demonstrates how to update CSS variables using JavaScript (JS). The HTML file contains a simple user interface with controls that allow the user to adjust spacing, blur, and base color of an image. The CSS variables are used to control these styles, and JS is used to update the variables dynamically based on user input.

## How it works

Each input has a `name` attribute to identify it and a `data-sizing` attribute that specifies the unit for the value (e.g., "px" for pixels).

#### CSS Variables

- `:root` selector defines CSS variables that can be accessed globally within the document.
  - `--base`: The base color set to #ffc600 (yellow).
  - `--spacing`: The spacing set to 10px.
  - `--blur`: The blur set to 10px.

#### Image Styling

- The `<img>` element is styled using the defined CSS variables:
  - `padding` is set to `var(--spacing)` to adjust the image spacing.
  - `background` is set to `var(--base)` to change the image background color.
  - `filter` is set to `blur(var(--blur))` to apply the blur effect to the image.

#### Highlight Text Styling

- The text with class "hl" is styled with the `color` set to `var(--base)`, which is the base color (yellow).

#### Miscellaneous Styling

- The rest of the CSS contains styling unrelated to CSS variables, such as body text alignment, background color, font, and input width.

### JavaScript

The `<script>` block contains JS code to handle user interactions and dynamically update the CSS variables based on input changes.

- The `const inputs` variable stores a NodeList of all the input elements with class "controls".
- The `handleUpdate` function is defined to handle input changes:
  - The function extracts the `data-sizing` value from the input element (or an empty string if not specified).
  - It updates the corresponding CSS variable with the new value and unit by using `document.documentElement.style.setProperty()` method.
- Event listeners are attached to each input element:
  - `change` event: Calls `handleUpdate` when the input value changes.
  - `mousemove` event: Calls `handleUpdate` when the user moves the mouse while dragging the range input.

The JS code dynamically updates the CSS variables whenever the user interacts with the controls, resulting in real-time changes to the image's appearance based on user input.

## Conclusion

This project showcases how to use CSS variables and JS together to create a dynamic and interactive user interface. Users can adjust spacing, blur, and base color through the controls, and the changes are instantly applied to the image. CSS variables provide a powerful way to manage styles across an entire document, making it easier to maintain and customize the design.
