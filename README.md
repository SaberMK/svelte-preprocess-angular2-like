# svelte-preprocessor-angular2-like
This preprocessor allows you to use angular2+ like component layout

Example:
```
project
|   App.svelte
|   main.ts
--- component
    |    component.html
    |    component.scss
    |    component.svelte
```
And now you can import this component as nested like:
```ts
    import Component from './component/component.svelte'
```

# Installation process
#### Please don't be lazy. 
 1. Copy and throw this file (name as you like, i.e. 'svelte.combiner.js' ) in the folder with rollup.config.js.
 2. After first step import it on rollup.config.js file. In example:
```js
    import svelteCombiner from './svelte-combiner';
```
 3. Put it on plugins array before svelte({... . In Example:
```svelte
...
    plugins: [
        svelteCombiner(), 
		svelte({
		...
    ]
...
```
4. Try to run it. It should just work.