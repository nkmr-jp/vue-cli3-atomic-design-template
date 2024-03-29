# About components directory

Classified by Atomic Design.

| components    | description     |
| :------------- | :------------- |
| Atoms    |  Atoms are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.   |
| Molecules    | Molecules are collections of atoms that form relatively simple UI components.    |
| Organisms    | Organisms are relatively complex components that form discrete sections of an interface. |
| Templates    | Templates place components within a layout and demonstrate the design’s underlying content structure.|
| Pages(Views)    | Pages apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.     |

Quoted from: [Atomic Design Methodology | Atomic Design by Brad Frost](http://atomicdesign.bradfrost.com/chapter-2/)


## Changed Pages to Views

- Default directory generated by 'vue cli router' is 'views'. It's like 'Pages' of Atomic Design.
- 'Pages' is before 'Templates' when sort by alphabet. This is not in component order of atomic design.
