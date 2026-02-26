
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


## Step-by-step usage guide (same node and parent node)

This section shows exactly how to set up each Conditional Displayer editor and how to target:

1. **properties on the same node**
2. **properties/sections on the parent node** (using the `parent:` prefix)

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

#### 4) Example — parent node

If your editor is inside a nested/child context and you want to target the parent node:

- **Show when checked**: `parent:seoTitle,parent:tab-seo`
- **Show when unchecked**: `parent:group-seo/social`

Result:
- Checked → parent property `seoTitle` + parent tab `tab-seo` are shown.
- Unchecked → parent group panel `group-seo/social` is shown.

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

#### 4) Example — parent node

- Item **Inherit SEO** (`key=inherit`)
  - Show: `parent:seoTitle,parent:seoDescription`
  - Hide: `parent:tab-openGraph`

Result:
- Parent SEO properties are shown, and parent Open Graph tab is hidden for this selection.

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

#### 4) Example — parent node

- **Advanced mode** (`key=advanced`)
  - Show: `parent:tab-advanced,parent:group-advanced/options`
  - Hide: `parent:tab-basic`

Result:
- Parent advanced tab/group is shown, parent basic tab is hidden.

---

### Target format rules (important)

- Separate multiple targets with commas: `heroTitle,heroSubtitle,parent:seoTitle`
- Parent scope prefix: `parent:<target>`
- Tabs: `tab-<tabName>`
- Tab content groups: `tab-content-<tabName>`
- Group panels: `group-<tabName>/<groupName>`

You can combine local and parent targets in one field:

- `heroTitle,parent:seoTitle,parent:tab-seo`

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

## Parent node targets

Conditional target fields now support `parent:` scope in addition to local aliases.

Use `parent:<target>` to toggle parent node properties or sections. Section targets still use data-element keys (`tab-...`, `tab-content-...`, `group-...`).
