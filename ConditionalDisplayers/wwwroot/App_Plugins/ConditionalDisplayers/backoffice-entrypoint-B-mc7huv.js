const i = "our-conditionaldisplayers", p = `${i}-checkbox`, n = `${i}-radio`, d = `${i}-dropdown`, c = `${i}-value-displayer`, a = {
  default: {
    label: "Initial state",
    description: "The initial state for the checkbox for new items and before the editor changes it.",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  },
  showIfChecked: {
    label: "Show if checked",
    description: "Targets to show when checked. Supports property aliases and section keys (tab-..., tab-content-..., group-...).<br />*Multiple targets must be comma separated.*",
    alias: "showIfChecked",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  showIfUnchecked: {
    label: "Show if unchecked",
    description: "Targets to show when unchecked. Supports property aliases and section keys (tab-..., tab-content-..., group-...).<br />*Multiple targets must be comma separated.*",
    alias: "showIfUnchecked",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  parentPropertyAlias: {
    label: "Parent property alias",
    description: "Optional. Use a parent property value to drive this displayer on the child node.",
    alias: "parentPropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  selectionType: {
    label: "Selection type",
    description: "Choose whether this editor behaves as a radio list (single selection) or checkbox list (multiple selections).",
    alias: "selectionType",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
    config: [
      {
        alias: "items",
        value: ["Radio", "Checkbox"]
      }
    ]
  },
  showLabels: {
    label: "Show toggle labels",
    description: "Show labels next to toggle button.",
    alias: "showLabels",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  },
  labelOn: {
    label: "Label On",
    description: "Label text when enabled.",
    alias: "labelOn",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  labelOff: {
    label: "Label Off",
    description: "Label text when disabled.",
    alias: "labelOff",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  }
}, t = {
  items: {
    label: "Add prevalue",
    description: "Add, remove or sort values for the conditional list.<br />Use aliases/sections in Show/Hide.<br />*Multiple targets must be comma separated.*",
    alias: "items",
    propertyEditorUiAlias: "Our.Umbraco.CdMultivalues"
  },
  default: {
    label: "Default value",
    description: "Type the key from the list created above to be the initial default selection.<br/>*(Optional)*",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  parentPropertyAlias: {
    label: "Parent property alias",
    description: "Optional. Use a parent property value to drive this displayer on the child node.",
    alias: "parentPropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  selectionType: {
    label: "Selection type",
    description: "Choose whether this editor behaves as a radio list (single selection) or checkbox list (multiple selections).",
    alias: "selectionType",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
    config: [
      {
        alias: "items",
        value: ["Radio", "Checkbox"]
      }
    ]
  },
  alignHrz: {
    label: "Align Horizontally",
    description: "Radio button are stacked vertically by default. Toggle this to align them horizontally",
    alias: "alignHrz",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  },
  labelsPos: {
    label: "Labels Position",
    description: "Works with horizontally aligned list only and not with standard buttons. Default is 'Right'",
    alias: "labelsPos",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
    config: [
      {
        alias: "items",
        value: ["Top", "Bottom", "Left", "Right"]
      }
    ]
  },
  asBtn: {
    label: "As Standard Buttons",
    description: "To display as standard buttons instead of radio buttons. Horizontally aligned by default.",
    alias: "asBtn",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  }
}, r = {
  items: {
    label: "Add prevalue",
    description: "Add, remove or sort values for the conditional list.<br />Use aliases/sections in Show/Hide.<br />*Multiple targets must be comma separated.*",
    alias: "items",
    propertyEditorUiAlias: "Our.Umbraco.CdMultivalues"
  },
  default: {
    label: "Default value",
    description: "Type the value name from the list created above to be the initial default selection.<br/>*(Optional)*",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  parentPropertyAlias: {
    label: "Parent property alias",
    description: "Optional. Use a parent property value to drive this displayer on the child node.",
    alias: "parentPropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  }
}, l = {
  items: {
    label: "Value mappings",
    description: "Add, remove or sort values for the conditional mapping.<br />Each item can show/hide aliases, tabs and groups.<br />*Multiple targets must be comma separated.*",
    alias: "items",
    propertyEditorUiAlias: "Our.Umbraco.CdMultivalues"
  },
  sourcePropertyAlias: {
    label: "Current property alias",
    description: "Optional. Alias of a property on the current node to observe.",
    alias: "sourcePropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  parentPropertyAlias: {
    label: "Parent property alias",
    description: "Optional. Alias of a property on the parent node to observe. Takes priority over Current property alias.",
    alias: "parentPropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  }
}, b = Object.keys(a).map((e) => a[e]), y = Object.keys(t).map((e) => t[e]), m = Object.keys(r).map((e) => r[e]), u = Object.keys(l).map((e) => l[e]), h = [
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdMultivalues",
    name: "[Conditional] Multivalues Displayer",
    element: () => import("./cdMultivalues-BrsdJT6q.js"),
    meta: {
      label: "[Conditional] Multivalues Displayer",
      icon: "icon-autofill",
      group: "common"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdCheckbox",
    name: "[Conditional] Checkbox Displayer",
    element: () => import("./index-erfB80oZ.js"),
    elementName: p,
    meta: {
      label: "[Conditional] Checkbox Displayer",
      icon: "icon-checkbox-dotted-active",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.TrueFalse",
      settings: {
        properties: b
      }
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdRadio",
    name: "[Conditional] Radio Displayer",
    element: () => import("./index-DSLe6uts.js"),
    elementName: n,
    meta: {
      label: "[Conditional] Radio Displayer",
      icon: "icon-circle-dotted-active",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: y,
        defaultData: [
          {
            alias: t.labelsPos.alias,
            value: "Right"
          },
          {
            alias: t.selectionType.alias,
            value: "Radio"
          }
        ]
      }
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdDropdownFlexible",
    name: "[Conditional] Dropdown Displayer",
    element: () => import("./index-vNU164VR.js"),
    elementName: d,
    meta: {
      label: "[Conditional] Dropdown Displayer",
      icon: "icon-filter-arrows",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: m
      }
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdValueDisplayer",
    name: "[Conditional] Value Displayer",
    element: () => import("./index-p49Q4-ld.js"),
    elementName: c,
    meta: {
      label: "[Conditional] Value Displayer",
      icon: "icon-eye",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: u
      }
    }
  }
], U = (e, o) => {
  const s = [...h];
  o.registerMany(s);
}, g = (e, o) => {
}, f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onInit: U,
  onUnload: g
}, Symbol.toStringTag, { value: "Module" }));
export {
  t as a,
  r as b,
  a as c,
  l as d,
  f as e,
  i as t
};
//# sourceMappingURL=backoffice-entrypoint-B-mc7huv.js.map
