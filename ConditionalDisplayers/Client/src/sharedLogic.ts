type TargetType = 'property' | 'section';

type ConditionalTarget = {
    type: TargetType;
    value: string;
};

const parseTargets = (aliases: string): ConditionalTarget[] => {
    if (!aliases) {
        return [];
    }

    return aliases
        .split(',')
        .map((x) => x.trim())
        .filter((x) => !!x)
        .map((value) => ({
            type: isSectionTarget(value) ? 'section' : 'property',
            value,
        } satisfies ConditionalTarget))
        .filter((x) => !!x.value);
};

const isSectionTarget = (value: string): boolean => {
    return value.startsWith('tab-') || value.startsWith('tab-content-') || value.startsWith('group-');
};

const toSelector = (target: ConditionalTarget): string => {
    if (target.type === 'section') {
        return `[data-element="${target.value}"]`;
    }

    return `umb-property[data-mark="property:${target.value}"]`;
};

export const toggleElements = (
    aliases: string,
    isShow: boolean,
    hostElement: HTMLElement
) => {
    const targets = parseTargets(aliases);

    if (targets.length === 0) {
        return;
    }

    const cssSelector = targets.map((x) => toSelector(x)).join(',');
    const elements = deepQuerySelectAll(cssSelector, hostElement, false);

    elements.forEach((el) => {
        if (isShow) {
            el.style.removeProperty('display');
        } else {
            el.style.display = 'none';
        }
    });
}

/**
 * Searches through all decendent elements of {@link rootNode} to find any elements matching {@link selector}.
 * @remarks non-elegant solution, relies on all decendent nodes to be set as 'open' (in Umbraco they are)
 */
export const deepQuerySelectAll = (selector: string, rootNode: HTMLElement = document.body, isSingleMatch: boolean = false): HTMLElement[] => {
    const arr : Array<Element> = [];

    const nodeLookup = (node: Element) => {
        // only element nodes
        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        // add if matching selector
        if (node.matches(selector)) {
            arr.push(node);
            if (isSingleMatch) {
                return;
            }
        }

        // loop through the children
        const children = node.children;
        if (children.length) {
            for (const child of children) {
                nodeLookup(child);
            }
        }

        // detect shadowRoot and loop through children
        const shadowRoot = node.shadowRoot;
        if (shadowRoot) {
            const shadowChildren = shadowRoot.children;
            for (const shadowChild of shadowChildren) {
                nodeLookup(shadowChild);
            }
        }
    }

    nodeLookup(rootNode);

    return (isSingleMatch ? arr.slice(0, 1) : arr) as Array<HTMLElement>;
}
