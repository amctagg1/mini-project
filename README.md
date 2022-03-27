# Mini Project

## Summary of Work

### Design

The provided Figma mockups have been applied to the Rick and Morty site. There were a few aspects of the design that warrant further discussion:
- The 'Search' button (white text on purple background) does not pass color contrast.
- Pages do not have unique and meaningful `<h1>` headers, which are important both for SEO and accessibility. (The `<h1>` is repeated as "The Rick and Morty" on ever page, which is not recommended.)
- The pagination links are smaller than the recommended minimum size for click targets (44 x 44 px).
- Links and buttons need clarification regarding the desired UI in focus / hover / active states.
- Table rows `<tr>` do not support the border-radius property. This aspect of the design would likely require major re-work to the markup structure of the table. (Perhaps using generic `<div>` structure instead of a `<table>`.) For now, I left the border-radius out of the site.

### Responsive

The site is responsive for tablet and phone sizes. 
- The header wraps its text and grows in height to avoid an overflow.
- The site navigation stacks at mobile sizes.
- The search bar and search button become full-with at mobile sizes.
- Table cells truncate long text with an ellipsis.
- On mobile, secondary table cells are hidden.

### Accessibility

Many adjustments to the markup were made to ensure that the site is accessible. 
- The table rows were not keyboard accessible. Now each row can be focused with TAb and its link visited with Enter.
- The table was missing required header names for screen readers. Now there are are column names that are hidden from view.
- The pagination links were not keyboard accessible. Now each row can be focused with TAb and its link visited with Enter.
- HTML landmarks wrap all site content (`<header>`, `<main>`, `<section>`, `<nav>`, etc.).
- Aria labels name relevant landmarks for users of screen readers.
  
### Challenges
  
- I wasn't able to figure out how to make the "Characters" navigation active when within an individual character sub-page, as was shown in the mockup. This was my first time using Angular, so with more time I would have learned more about routerLinkActive.

## How to Run

After installing npm packages, you can run `ng serve` to start a development server. Navigate to `http://localhost:4200/` and you will see the application. The app will reload automatically when you change any of the source files.
