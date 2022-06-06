import { Tag, Node, RenderableTreeNode } from '@markdoc/markdoc';
import { Heading } from 'components';

function generateID(children: Array<RenderableTreeNode>, attributes: Record<string, any>) {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export const heading = {
  render: Heading,
  children: ['inline'],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
    className: { type: String },
  },
  transform(node: Node, config: Object) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    const name = `h${node.attributes['level']}`;

    return new Tag(name, { ...attributes, id }, children);
  },
};
