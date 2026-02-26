
# Configuration

>⚠️ **VALIDATION:** Hiding properties with Conditional Displayers won't bypass their validation rules. i.e if you make a property required, this will still be required even if it's hidden.

## Editors
### Checkbox

Create a new DataType and select '[Conditional] Checkbox Displayer' as the Property Editor.

-*Default* value: select the value that the checkbox will have by default: checked/unchecked.

-*Show when checked*: enter the aliases of those properties you want to show when the checkbox is checked. Note: these properties <b>will be hidden</b> if it's unchecked.

-*Show when unchecked*: enter the aliases of those properties you want to show when the checkbox is unchecked. Note: these properties <b>will be hidden</b> if it's checked.

### Dropdown

Create a new DataType and select '[Conditional] Dropdown Displayer' as the Property Editor.

You'll have to create a list of options that the dropdown will display. In addition to the value you have two other inputs used to show or hide one or more properties.

-*Show when selected*: enter the aliases of those properties you want to show when the checkbox is selected. Note: these properties <b>won't be hidden</b> when this value unselected.

-*Hide when selected*: enter the aliases of those properties you want to show when the checkbox is selected. Note: these properties <b>won't be hidden</b> when this value unselected.

><strong>Note:</strong> the difference of behaviour between the checkbox and the dropdown input logic can be a bit confusing, but after a lot of testing it seems the most flexible way to combine the different possibilities when configuring them. I'm open to other behaviour suggestions.

### Radio list

There's also a radio list datatype with the name '[Conditional] Radio Displayer'. The configuration of this editor is the same as the previous ones


## Step-by-step usage guide (same node + parent-driven child logic)

This section shows exactly how to set up each Conditional Displayer editor and how to target:

1. **properties on the same node**
2. **properties/sections on the same child node, driven by a parent property value**

### Before you start

1. Open **Settings → Document Types**.
2. Make sure the properties you want to toggle already exist, and note their aliases.
3. If you want to target tabs/groups, collect their target keys (`tab-...`, `tab-content-...`, `group-...`).

---

### A) Checkbox Displayer

#### 1) Create the data type

1. Go to **Settings → Data Types**.
2. Create a new data type, e.g. `CD - Publish options`.
3. Choose **[Conditional] Checkbox Displayer**.

#### 2) Configure checkbox behavior

Use these fields in the data type config:

- **Default**: checked or unchecked initial state.
- **Show when checked**: comma-separated targets shown when checked.
- **Show when unchecked**: comma-separated targets shown when unchecked.

#### 3) Example — same node

Imagine these properties are on the same content type:

- `showHero` (your checkbox displayer property)
- `heroTitle`
- `heroSubtitle`
- `hideHeroNote`

Configuration:

- **Show when checked**: `heroTitle,heroSubtitle`
- **Show when unchecked**: `hideHeroNote`

Result:
- Checked → `heroTitle` and `heroSubtitle` are shown.
- Unchecked → `hideHeroNote` is shown.


---

### B) Dropdown Displayer

#### 1) Create the data type

1. Go to **Settings → Data Types**.
2. Create a new data type, e.g. `CD - Layout selector`.
3. Choose **[Conditional] Dropdown Displayer**.

#### 2) Add items

Each item lets you configure:

- **Value** (label shown in dropdown)
- **Key** (stored value)
- **Show** targets
- **Hide** targets

#### 3) Example — same node

Properties:
- `layoutSelector` (dropdown displayer)
- `heroImage`
- `videoUrl`
- `ctaText`

Items:

- Item **Image layout** (`key=image`)
  - Show: `heroImage,ctaText`
  - Hide: `videoUrl`
- Item **Video layout** (`key=video`)
  - Show: `videoUrl,ctaText`
  - Hide: `heroImage`

Result:
- Selecting *Image layout* shows image fields and hides video.
- Selecting *Video layout* does the opposite.


---

### C) Radio List Displayer

#### 1) Create the data type

1. Go to **Settings → Data Types**.
2. Create a new data type, e.g. `CD - Content mode`.
3. Choose **[Conditional] Radio Displayer**.

#### 2) Add options

Each option has:

- **Value**
- **Key**
- **Show** targets
- **Hide** targets

#### 3) Example — same node

Properties:
- `contentMode` (radio displayer)
- `summary`
- `longBody`
- `quoteText`

Options:

- **Summary mode** (`key=summary`)
  - Show: `summary`
  - Hide: `longBody,quoteText`
- **Article mode** (`key=article`)
  - Show: `longBody`
  - Hide: `summary,quoteText`
- **Quote mode** (`key=quote`)
  - Show: `quoteText`
  - Hide: `summary,longBody`


---

### Target format rules (important)

- Tabs: `tab-<tabName>`
- Tab content groups: `tab-content-<tabName>`
- Group panels: `group-<tabName>/<groupName>`


## Parent-driven child display

You can now set an optional **Parent property alias** in each displayer data type.

- When this setting is empty, the displayer uses its own value (default behavior).
- When it is set, the displayer reads the parent property value and applies the configured Show/Hide targets on the child node.

Examples:
- Checkbox displayer + parent alias `inheritSettings` (boolean): checked-like behavior is taken from the parent value.
- Dropdown/Radio displayer + parent alias `layoutMode`: the parent value is matched against each item `Key`/`Value`.

This gives you a clean setup where parent data controls what is visible on child properties.

## Tabs and Groups
The previous documentation talks about *property names* to configure the editors, but you can also configure them to show or hide tabs and groups. [Jump to the extended documentation.](tabs-and-groups)


## Getting the values on the templates

The Conditional Displayers are normal property editors so you can access their values as with any other property (strongly typed model, Model.Value(),...)

# Contributing

Conditional Displayers is open to anyone that want to contribute!

If you have any ideas, feedback or issues please let me know. With everyones effort we can make an awesome package.

[Issues](https://github.com/skartknet/ConditionalDisplayers/issues)

[Discussions](https://github.com/skartknet/ConditionalDisplayers/discussions)

If you want to contribute to the code that's awesome!

To start working on new code, you should start by forking the repository, cloning it to your computer, and creating a new branch from the `master` branch.

Once you are done making your changes, push them to your branch, and create a Pull Request (aka PR) back to the `master` branch of this repo. We'll take a look and if everything works fine, your changes will be release in the next version.

## Working locally

The solution in this repo includes a ConditionalDisplayers project, which is the actual package, and a few UmbracoVx that are used for testing.

You can access to the backoffice of all the site with the following credentials:

**Username**: `admin@admin.com`\
**Password**: `Password123`

