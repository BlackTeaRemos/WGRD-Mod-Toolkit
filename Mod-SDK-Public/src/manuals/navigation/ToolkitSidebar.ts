export class ToolkitSidebar {
  public static Build () {
    return {
      label: 'Toolkit',
      items: [
        {
          label: 'Start',
          collapsed: false,
          items: [
            'start',
            'start/installation',
            'start/controls',
          ],
        },
        {
          label: 'Tutorials',
          collapsed: false,
          items: [
            'tutorials',
            'tutorials/first-mod',
            'tutorials/unit-variant',
            'tutorials/deck-designer',
            'tutorials/visual-author',
            { label: 'First steps', collapsed: true, items: [ { autogenerate: { directory: 'tutorials/foundations' } } ] },
            { label: 'Unit variants', collapsed: true, items: [ { autogenerate: { directory: 'tutorials/units' } } ] },
            { label: 'Weapons and loadouts', collapsed: true, items: [ { autogenerate: { directory: 'tutorials/weapons' } } ] },
            { label: 'Deck design', collapsed: true, items: [ { autogenerate: { directory: 'tutorials/decks' } } ] },
            { label: 'Visual authoring', collapsed: true, items: [ { autogenerate: { directory: 'tutorials/visuals' } } ] },
            { label: 'History and delivery', collapsed: true, items: [ { autogenerate: { directory: 'tutorials/delivery' } } ] },
          ],
        },
        {
          label: 'Guides',
          collapsed: true,
          items: [ 'guides/workspace', 'guides/showroom', 'guides/weapons', 'guides/decks', 'guides/loadouts', 'guides/translations', 'guides/settings' ],
        },
        {
          label: 'Parameter reference',
          collapsed: true,
          items: [
            'parameters',
            'parameters/values-and-ownership',
            'parameters/units',
            'parameters/movement-sensors',
            'parameters/weapons',
            'parameters/missiles',
            'parameters/mounts-loadouts',
            'parameters/decks',
            'parameters/effects',
            'parameters/visuals',
            'parameters/interface',
            'parameters/text-settings',
          ],
        },
        { label: 'Troubleshooting', collapsed: true, items: [ { autogenerate: { directory: 'troubleshooting' } } ] },
        { label: 'About', collapsed: true, items: [ { autogenerate: { directory: 'about' } } ] },
      ],
    };
  }
}
