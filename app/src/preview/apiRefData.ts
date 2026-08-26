export interface ApiGroup { name: string; note: string; origin: 'api' | 'props'; columns: string[]; rows: string[][] }
export interface ApiUpstream { label: string; url: string }
export type ApiReference =
  | { kind: 'table'; groups: ApiGroup[]; upstream?: ApiUpstream }
  | { kind: 'upstream'; upstream: ApiUpstream }
  | { kind: 'prose'; text: string }
  | { kind: 'ours' }
  | { kind: 'none' };

// 키는 컴포넌트 이름임
export const API_REFERENCE: Record<string, ApiReference> = {
  "accordion": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI",
      "url": "https://base-ui.com/react/components/accordion#api-reference"
    }
  },
  "alert": {
    "kind": "table",
    "groups": [
      {
        "name": "Alert",
        "note": "The Alert component displays a callout for user attention.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"destructive\"",
            "\"default\""
          ]
        ]
      },
      {
        "name": "AlertTitle",
        "note": "The AlertTitle component displays the title of the alert.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "AlertDescription",
        "note": "The AlertDescription component displays the description or content of the alert.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "AlertAction",
        "note": "The AlertAction component displays an action element (like a button) positioned absolutely in the top-right corner of the alert.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      }
    ]
  },
  "alertdialog": {
    "kind": "table",
    "groups": [
      {
        "name": "size",
        "note": "Use the size prop on the AlertDialogContent component to control the size of the alert dialog. It accepts the following values:",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "size",
            "\"default\" | \"sm\"",
            "\"default\""
          ]
        ]
      }
    ],
    "upstream": {
      "label": "Base UI documentation",
      "url": "https://base-ui.com/react/components/alert-dialog#api-reference"
    }
  },
  "aspectratio": {
    "kind": "table",
    "groups": [
      {
        "name": "AspectRatio",
        "note": "The AspectRatio component displays content within a desired ratio.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Required"
        ],
        "rows": [
          [
            "ratio",
            "number",
            "-",
            "Yes"
          ],
          [
            "className",
            "string",
            "-",
            "No"
          ]
        ]
      }
    ],
    "upstream": {
      "label": "Base UI documentation",
      "url": "https://base-ui.com/react/components/aspect-ratio#api-reference"
    }
  },
  "attachment": {
    "kind": "table",
    "groups": [
      {
        "name": "Attachment",
        "note": "The root attachment container.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "state",
            "\"idle\" | \"uploading\" | \"processing\" | \"error\" | \"done\"",
            "\"done\"",
            "The upload state. Drives styling and the shimmer."
          ],
          [
            "size",
            "\"default\" | \"sm\" | \"xs\"",
            "\"default\"",
            "The attachment size."
          ],
          [
            "orientation",
            "\"horizontal\" | \"vertical\"",
            "\"horizontal\"",
            "Lay the media beside or above the content."
          ],
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the root element."
          ]
        ]
      },
      {
        "name": "AttachmentMedia",
        "note": "The media slot for an icon or image preview.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "variant",
            "\"icon\" | \"image\"",
            "\"icon\"",
            "Whether the media holds an icon or an `<img>`."
          ],
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the media slot."
          ]
        ]
      },
      {
        "name": "AttachmentContent",
        "note": "Wraps the title and description.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the content slot."
          ]
        ]
      },
      {
        "name": "AttachmentTitle",
        "note": "The attachment name. Shimmers while the attachment is uploading or processing.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the title."
          ]
        ]
      },
      {
        "name": "AttachmentDescription",
        "note": "Secondary metadata such as the file type, size, or upload status.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the description."
          ]
        ]
      },
      {
        "name": "AttachmentActions",
        "note": "A container for one or more actions, aligned to the end of the attachment.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the actions."
          ]
        ]
      },
      {
        "name": "AttachmentAction",
        "note": "An action button. Renders a Button and accepts all of its props.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "size",
            "Button[\"size\"]",
            "\"icon-xs\"",
            "The button size."
          ],
          [
            "...props",
            "React.ComponentProps<typeof Button>",
            "-",
            "Props spread to the underlying `Button`."
          ]
        ]
      },
      {
        "name": "AttachmentTrigger",
        "note": "A full-card overlay that activates the attachment. Renders a <button> by default.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "render",
            "ReactElement | function",
            "-",
            "Render as a different element, such as a link."
          ],
          [
            "...props",
            "React.ComponentProps<\"button\">",
            "-",
            "Props spread to the trigger element."
          ]
        ]
      },
      {
        "name": "AttachmentGroup",
        "note": "Lays out attachments in a horizontally scrollable, snapping row.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the group."
          ]
        ]
      }
    ]
  },
  "avatar": {
    "kind": "table",
    "groups": [
      {
        "name": "Avatar",
        "note": "The Avatar component is the root component that wraps the avatar image and fallback.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "size",
            "\"default\" | \"sm\" | \"lg\"",
            "\"default\""
          ],
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "AvatarImage",
        "note": "The AvatarImage component displays the avatar image. It accepts all Base UI Avatar Image props.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "src",
            "string",
            "-"
          ],
          [
            "alt",
            "string",
            "-"
          ],
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "AvatarFallback",
        "note": "The AvatarFallback component displays a fallback when the image fails to load. It accepts all Base UI Avatar Fallback props.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "AvatarBadge",
        "note": "The AvatarBadge component displays a badge indicator on the avatar, typically positioned at the bottom right.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "AvatarGroup",
        "note": "The AvatarGroup component displays a group of avatars with overlapping styling.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "AvatarGroupCount",
        "note": "The AvatarGroupCount component displays a count indicator in an avatar group, typically showing the number of additional avatars.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      }
    ],
    "upstream": {
      "label": "Base UI documentation",
      "url": "https://base-ui.com/react/components/avatar#api-reference"
    }
  },
  "badge": {
    "kind": "table",
    "groups": [
      {
        "name": "Badge",
        "note": "The Badge component displays a badge or a component that looks like a badge.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"secondary\" | \"destructive\" | \"outline\" | \"ghost\" | \"link\"",
            "\"default\""
          ],
          [
            "className",
            "string",
            "-"
          ]
        ]
      }
    ]
  },
  "breadcrumb": {
    "kind": "table",
    "groups": [
      {
        "name": "Breadcrumb",
        "note": "The Breadcrumb component is the root navigation element that wraps all breadcrumb components.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "BreadcrumbList",
        "note": "The BreadcrumbList component displays the ordered list of breadcrumb items.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "BreadcrumbItem",
        "note": "The BreadcrumbItem component wraps individual breadcrumb items.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "BreadcrumbLink",
        "note": "The BreadcrumbLink component displays a clickable link in the breadcrumb.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "BreadcrumbPage",
        "note": "The BreadcrumbPage component displays the current page in the breadcrumb (non-clickable).",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "BreadcrumbSeparator",
        "note": "The BreadcrumbSeparator component displays a separator between breadcrumb items. You can pass custom children to override the default separator icon.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "children",
            "React.ReactNode",
            "-"
          ],
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "BreadcrumbEllipsis",
        "note": "The BreadcrumbEllipsis component displays an ellipsis indicator for collapsed breadcrumb items.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      }
    ]
  },
  "bubble": {
    "kind": "table",
    "groups": [
      {
        "name": "Bubble",
        "note": "The root bubble wrapper.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"secondary\" | \"muted\" | \"tinted\" | \"outline\" | \"ghost\" | \"destructive\"",
            "\"default\"",
            "The bubble visual treatment."
          ],
          [
            "align",
            "\"start\" | \"end\"",
            "\"start\"",
            "The inline alignment of the bubble."
          ],
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the root element."
          ]
        ]
      },
      {
        "name": "BubbleContent",
        "note": "The bubble content wrapper.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "render",
            "ReactElement | function",
            "-",
            "Render the content as a different element such as a link."
          ],
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the content element."
          ]
        ]
      },
      {
        "name": "BubbleReactions",
        "note": "Displays overlapped reactions for a bubble.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "side",
            "\"top\" | \"bottom\"",
            "\"bottom\"",
            "The side of the bubble to anchor the reactions."
          ],
          [
            "align",
            "\"start\" | \"end\"",
            "\"end\"",
            "The inline alignment of the reactions."
          ],
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the reaction row."
          ]
        ]
      },
      {
        "name": "BubbleGroup",
        "note": "Groups consecutive bubbles from the same sender.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the group root."
          ]
        ]
      }
    ]
  },
  "button": {
    "kind": "table",
    "groups": [
      {
        "name": "Button",
        "note": "The Button component is a wrapper around the button element that adds a variety of styles and functionality.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"outline\" | \"ghost\" | \"destructive\" | \"secondary\" | \"link\"",
            "\"default\""
          ],
          [
            "size",
            "\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-xs\" | \"icon-sm\" | \"icon-lg\"",
            "\"default\""
          ]
        ]
      }
    ]
  },
  "buttongroup": {
    "kind": "table",
    "groups": [
      {
        "name": "ButtonGroup",
        "note": "The ButtonGroup component is a container that groups related buttons together with consistent styling.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "orientation",
            "\"horizontal\" | \"vertical\"",
            "\"horizontal\""
          ]
        ]
      },
      {
        "name": "ButtonGroupSeparator",
        "note": "The ButtonGroupSeparator component visually divides buttons within a group.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "orientation",
            "\"horizontal\" | \"vertical\"",
            "\"vertical\""
          ]
        ]
      },
      {
        "name": "ButtonGroupText",
        "note": "Use this component to display text within a button group.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "render",
            "React.ReactElement",
            "—"
          ]
        ]
      }
    ]
  },
  "calendar": {
    "kind": "upstream",
    "upstream": {
      "label": "React DayPicker",
      "url": "https://react-day-picker.js.org"
    }
  },
  "card": {
    "kind": "table",
    "groups": [
      {
        "name": "Card",
        "note": "The Card component is the root container for card content.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "size",
            "\"default\" | \"sm\"",
            "\"default\""
          ],
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "CardHeader",
        "note": "The CardHeader component is used for a title, description, and optional action.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "CardTitle",
        "note": "The CardTitle component is used for the card title.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "CardDescription",
        "note": "The CardDescription component is used for helper text under the title.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "CardAction",
        "note": "The CardAction component places content in the top-right of the header (for example, a button or a badge).",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "CardContent",
        "note": "The CardContent component is used for the main card body.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      },
      {
        "name": "CardFooter",
        "note": "The CardFooter component is used for actions and secondary content at the bottom of the card.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "-"
          ]
        ]
      }
    ]
  },
  "carousel": {
    "kind": "upstream",
    "upstream": {
      "label": "Embla Carousel docs",
      "url": "https://www.embla-carousel.com/api/"
    }
  },
  "chart": {
    "kind": "table",
    "groups": [
      {
        "name": "Tooltip",
        "note": "Use the following props to customize the tooltip.",
        "origin": "props",
        "columns": [
          "Prop",
          "Type",
          "Description"
        ],
        "rows": [
          [
            "labelKey",
            "string",
            "The config or data key to use for the label."
          ],
          [
            "nameKey",
            "string",
            "The config or data key to use for the name."
          ],
          [
            "indicator",
            "dot` `line` or `dashed",
            "The indicator style for the tooltip."
          ],
          [
            "hideLabel",
            "boolean",
            "Whether to hide the label."
          ],
          [
            "hideIndicator",
            "boolean",
            "Whether to hide the indicator."
          ]
        ]
      }
    ]
  },
  "checkbox": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI",
      "url": "https://base-ui.com/react/components/checkbox#api-reference"
    }
  },
  "collapsible": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI",
      "url": "https://base-ui.com/react/components/collapsible#api-reference"
    }
  },
  "combobox": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI",
      "url": "https://base-ui.com/react/components/combobox#api-reference"
    }
  },
  "command": {
    "kind": "upstream",
    "upstream": {
      "label": "cmdk",
      "url": "https://github.com/dip/cmdk"
    }
  },
  "contextmenu": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI",
      "url": "https://base-ui.com/react/components/context-menu#api-reference"
    }
  },
  "datatable": {
    "kind": "none"
  },
  "datepicker": {
    "kind": "none"
  },
  "dialog": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI",
      "url": "https://base-ui.com/react/components/dialog#api-reference"
    }
  },
  "direction": {
    "kind": "none"
  },
  "drawer": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI documentation",
      "url": "https://base-ui.com/react/components/drawer"
    }
  },
  "menu": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI documentation",
      "url": "https://base-ui.com/react/components/menu"
    }
  },
  "empty": {
    "kind": "table",
    "groups": [
      {
        "name": "Empty",
        "note": "The main component of the empty state. Wraps the EmptyHeader and EmptyContent components.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "EmptyHeader",
        "note": "The EmptyHeader component wraps the empty media, title, and description.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "EmptyMedia",
        "note": "Use the EmptyMedia component to display the media of the empty state such as an icon or an image. You can also use it to display other components such as an avatar.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"icon\"",
            "default"
          ],
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "EmptyTitle",
        "note": "Use the EmptyTitle component to display the title of the empty state.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "EmptyDescription",
        "note": "Use the EmptyDescription component to display the description of the empty state.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "EmptyContent",
        "note": "Use the EmptyContent component to display the content of the empty state such as a button, input or a link.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      }
    ]
  },
  "field": {
    "kind": "table",
    "groups": [
      {
        "name": "FieldSet",
        "note": "Container that renders a semantic fieldset with spacing presets.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "FieldLegend",
        "note": "Legend element for a FieldSet. Switch to the label variant to align with label sizing.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "variant",
            "\"legend\" | \"label\"",
            "\"legend\""
          ],
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "FieldGroup",
        "note": "Layout wrapper that stacks Field components and enables container queries for responsive orientations.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "Field",
        "note": "The core wrapper for a single field. Provides orientation control, invalid state styling, and spacing.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "orientation",
            "\"vertical\" | \"horizontal\" | \"responsive\"",
            "\"vertical\""
          ],
          [
            "className",
            "string",
            "—"
          ],
          [
            "data-invalid",
            "boolean",
            "—"
          ]
        ]
      },
      {
        "name": "FieldContent",
        "note": "Flex column that groups control and descriptions when the label sits beside the control. Not required if you have no description.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "FieldLabel",
        "note": "Label styled for both direct inputs and nested Field children.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "FieldTitle",
        "note": "Renders a title with label styling inside FieldContent.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "FieldDescription",
        "note": "Helper text slot that automatically balances long lines in horizontal layouts.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "FieldSeparator",
        "note": "Visual divider to separate sections inside a FieldGroup. Accepts optional inline content.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "FieldError",
        "note": "Accessible error container that accepts children or an errors array (e.g., from react-hook-form).",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "errors",
            "Array<{ message?: string } | undefined>",
            "—"
          ],
          [
            "className",
            "string",
            "—"
          ]
        ]
      }
    ],
    "upstream": {
      "label": "Standard Schema",
      "url": "https://standardschema.dev/"
    }
  },
  "hovercard": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI",
      "url": "https://base-ui.com/react/components/hover-card#api-reference"
    }
  },
  "input": {
    "kind": "none"
  },
  "inputgroup": {
    "kind": "table",
    "groups": [
      {
        "name": "InputGroup",
        "note": "The main component that wraps inputs and addons.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "InputGroupAddon",
        "note": "Displays icons, text, buttons, or other content alongside inputs.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "align",
            "\"inline-start\" | \"inline-end\" | \"block-start\" | \"block-end\"",
            "\"inline-start\""
          ],
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "InputGroupButton",
        "note": "Displays buttons within input groups.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "size",
            "\"xs\" | \"icon-xs\" | \"sm\" | \"icon-sm\"",
            "\"xs\""
          ],
          [
            "variant",
            "\"default\" | \"destructive\" | \"outline\" | \"secondary\" | \"ghost\" | \"link\"",
            "\"ghost\""
          ],
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "InputGroupInput",
        "note": "Replacement for <Input /> when building input groups. This component has the input group styles pre-applied and uses the unified data-slot=\"input-group-control\" for focus state handling.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "InputGroupTextarea",
        "note": "Replacement for <Textarea /> when building input groups. This component has the textarea group styles pre-applied and uses the unified data-slot=\"input-group-control\" for focus state handling.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      }
    ]
  },
  "inputotp": {
    "kind": "upstream",
    "upstream": {
      "label": "input-otp",
      "url": "https://input-otp.rodz.dev"
    }
  },
  "item": {
    "kind": "table",
    "groups": [
      {
        "name": "Item",
        "note": "The main component for displaying content with media, title, description, and actions.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"outline\" | \"muted\"",
            "\"default\""
          ],
          [
            "size",
            "\"default\" | \"sm\" | \"xs\"",
            "\"default\""
          ],
          [
            "render",
            "React.ReactElement",
            "—"
          ]
        ]
      },
      {
        "name": "ItemMedia",
        "note": "Use ItemMedia to display media content such as icons, images, or avatars.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"icon\" | \"image\"",
            "\"default\""
          ]
        ]
      }
    ]
  },
  "kbd": {
    "kind": "table",
    "groups": [
      {
        "name": "Kbd",
        "note": "Use the Kbd component to display a keyboard key.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      },
      {
        "name": "KbdGroup",
        "note": "Use the KbdGroup component to group Kbd components together.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "className",
            "string",
            "—"
          ]
        ]
      }
    ]
  },
  "label": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Label",
      "url": "https://base-ui.com/react/components/label#api-reference"
    }
  },
  "marker": {
    "kind": "table",
    "groups": [
      {
        "name": "Marker",
        "note": "The root marker element. The file also exports markerVariants for composing the marker styles into custom components.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "variant",
            "\"default\" | \"border\" | \"separator\"",
            "\"default\"",
            "The marker layout."
          ],
          [
            "render",
            "ReactElement | function",
            "-",
            "Render as a different element, such as a link."
          ],
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the root element."
          ]
        ]
      },
      {
        "name": "MarkerIcon",
        "note": "A decorative icon slot. Hidden from assistive tech with aria-hidden.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the icon slot."
          ]
        ]
      },
      {
        "name": "MarkerContent",
        "note": "The marker text content.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the content slot."
          ]
        ]
      }
    ]
  },
  "menubar": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Menubar",
      "url": "https://base-ui.com/react/components/menubar#api-reference"
    }
  },
  "message": {
    "kind": "table",
    "groups": [
      {
        "name": "Message",
        "note": "The message row wrapper.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "align",
            "\"start\" | \"end\"",
            "\"start\"",
            "The alignment of the message in the conversation."
          ],
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the row."
          ]
        ]
      },
      {
        "name": "MessageGroup",
        "note": "Groups consecutive messages from the same sender.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the group root."
          ]
        ]
      },
      {
        "name": "MessageAvatar",
        "note": "The avatar slot, aligned to the bottom of the message. When the message has a MessageFooter, the avatar shifts up to stay aligned with the message surface instead of the footer.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the avatar slot."
          ]
        ]
      },
      {
        "name": "MessageContent",
        "note": "Wraps the header, message surface, and footer.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the content slot."
          ]
        ]
      },
      {
        "name": "MessageHeader",
        "note": "Displays content above the message, such as a sender name. Stays aligned to the start regardless of align.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the header."
          ]
        ]
      },
      {
        "name": "MessageFooter",
        "note": "Displays content below the message, such as status or actions. Aligns to the message side.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default",
          "Description"
        ],
        "rows": [
          [
            "className",
            "string",
            "-",
            "Additional classes to apply to the footer."
          ]
        ]
      }
    ]
  },
  "messagescroller": {
    "kind": "prose",
    "text": "The props, data attributes, and hooks for every part are documented on the [@shadcn/react Message Scroller](/docs/react/message-scroller#api-reference) page. They are identical for the styled component and the unstyled parts."
  },
  "nativeselect": {
    "kind": "table",
    "groups": [
      {
        "name": "NativeSelectOption",
        "note": "Represents an individual option within the select.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "value",
            "string",
            "—"
          ],
          [
            "disabled",
            "boolean",
            "false"
          ]
        ]
      },
      {
        "name": "NativeSelectOptGroup",
        "note": "Groups related options together for better organization.",
        "origin": "api",
        "columns": [
          "Prop",
          "Type",
          "Default"
        ],
        "rows": [
          [
            "label",
            "string",
            "—"
          ],
          [
            "disabled",
            "boolean",
            "false"
          ]
        ]
      }
    ]
  },
  "navigationmenu": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Navigation Menu",
      "url": "https://base-ui.com/react/components/navigation-menu#api-reference"
    }
  },
  "pagination": {
    "kind": "none"
  },
  "popover": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Popover",
      "url": "https://base-ui.com/react/components/popover#api-reference"
    }
  },
  "progress": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Progress",
      "url": "https://base-ui.com/react/components/progress#api-reference"
    }
  },
  "questionnaire": {
    "kind": "prose",
    "text": "The props, data attributes, and render states for every part are documented on the [@shadcn/react Questionnaire](/docs/react/questionnaire#api-reference) page. The styled components inherit the corresponding unstyled props. Navigation components also accept Button `size` and `variant` props, and `QuestionnaireActions` is a styled-only layout helper."
  },
  "radio": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Radio Group",
      "url": "https://base-ui.com/react/components/radio-group#api-reference"
    }
  },
  "resizable": {
    "kind": "upstream",
    "upstream": {
      "label": "react-resizable-panels",
      "url": "https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels"
    }
  },
  "scrollarea": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Scroll Area",
      "url": "https://base-ui.com/react/components/scroll-area#api-reference"
    }
  },
  "select": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Select",
      "url": "https://base-ui.com/react/components/select#api-reference"
    }
  },
  "divider": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Separator",
      "url": "https://base-ui.com/react/components/separator#api-reference"
    }
  },
  "sheet": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Dialog",
      "url": "https://base-ui.com/react/components/dialog#api-reference"
    }
  },
  "sidebar": {
    "kind": "table",
    "groups": [
      {
        "name": "SidebarProvider",
        "note": "",
        "origin": "props",
        "columns": [
          "Name",
          "Type",
          "Description"
        ],
        "rows": [
          [
            "defaultOpen",
            "boolean",
            "Default open state of the sidebar."
          ],
          [
            "open",
            "boolean",
            "Open state of the sidebar (controlled)."
          ],
          [
            "onOpenChange",
            "(open: boolean) => void",
            "Sets open state of the sidebar (controlled)."
          ]
        ]
      },
      {
        "name": "Sidebar",
        "note": "<Callout>",
        "origin": "props",
        "columns": [
          "Property",
          "Type",
          "Description"
        ],
        "rows": [
          [
            "side",
            "left` or `right",
            "The side of the sidebar."
          ],
          [
            "variant",
            "sidebar`, `floating`, or `inset",
            "The variant of the sidebar."
          ],
          [
            "collapsible",
            "offcanvas`, `icon`, or `none",
            "Collapsible state of the sidebar."
          ]
        ]
      },
      {
        "name": "Sidebar",
        "note": "<Callout>",
        "origin": "props",
        "columns": [
          "Prop",
          "Description"
        ],
        "rows": [
          [
            "offcanvas",
            "A collapsible sidebar that slides in from the left or right."
          ],
          [
            "icon",
            "A sidebar that collapses to icons."
          ],
          [
            "none",
            "A non-collapsible sidebar."
          ]
        ]
      }
    ]
  },
  "skeleton": {
    "kind": "none"
  },
  "slider": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Slider",
      "url": "https://base-ui.com/react/components/slider#api-reference"
    }
  },
  "spinner": {
    "kind": "none"
  },
  "switch": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Switch",
      "url": "https://base-ui.com/react/components/switch#api-reference"
    }
  },
  "table": {
    "kind": "none"
  },
  "tabs": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Tabs",
      "url": "https://base-ui.com/react/components/tabs#api-reference"
    }
  },
  "textarea": {
    "kind": "none"
  },
  "toast": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Toast documentation",
      "url": "https://base-ui.com/react/components/toast"
    }
  },
  "toggle": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Toggle",
      "url": "https://base-ui.com/react/components/toggle#api-reference"
    }
  },
  "togglegroup": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Toggle Group",
      "url": "https://base-ui.com/react/components/toggle-group#api-reference"
    }
  },
  "tooltip": {
    "kind": "upstream",
    "upstream": {
      "label": "Base UI Tooltip",
      "url": "https://base-ui.com/react/components/tooltip#api-reference"
    }
  },
  "prose": {
    "kind": "none"
  },
  "banner": {
    "kind": "ours"
  },
  "chip": {
    "kind": "ours"
  },
  "link": {
    "kind": "ours"
  },
  "listrow": {
    "kind": "ours"
  },
  "meter": {
    "kind": "ours"
  },
  "pageheader": {
    "kind": "ours"
  },
  "segmented": {
    "kind": "ours"
  },
  "stages": {
    "kind": "ours"
  },
  "stat": {
    "kind": "ours"
  },
  "stepper": {
    "kind": "ours"
  },
  "toolbar": {
    "kind": "ours"
  }
};

export function apiReferenceOf(name: string): ApiReference {
  return API_REFERENCE[name] ?? { kind: 'none' };
}
