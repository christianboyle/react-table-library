import * as React from 'react';
import { css } from 'styled-components';
import cs from 'classnames';

import { Body } from '@table-library/react-table-library/lib/table/Body';
import { Row } from '@table-library/react-table-library/lib/table/Row';
import { isRowClick } from '@common/util/isRowClick';

import { isLeaf, hasLeaves } from './util';
import { TREE_EXPAND_TYPES } from './config';

const useTreeRow = ({
  item,
  treeDepthLevel = 0,
  treeColumnLevel = 1,
  showCondition = () => true,
  loadingPanel = null,
  isTreeExpanded,
  onToggleTreeExpandById,
  treeExpandType = TREE_EXPAND_TYPES.RowClick,
  children,
  ...passThrough
}) => {
  const theme = css`
    &.tree-expandable-row {
      cursor: pointer;
    }

    .td:nth-child(${treeColumnLevel}) > div {
      margin-left: ${treeDepthLevel * 20}px;
    }
  `;

  const className = cs('row-tree', {
    'tree-expandable-row':
      treeExpandType === TREE_EXPAND_TYPES.RowClick,
    'expanded-tree-row': isTreeExpanded
  });

  const onClick = (tableItem, event) => {
    if (!isRowClick(event)) return;

    if (isLeaf(tableItem)) return;

    if (treeExpandType === TREE_EXPAND_TYPES.RowClick) {
      onToggleTreeExpandById(tableItem.id);
    }
  };

  let treePanel = null;

  if (
    isTreeExpanded &&
    !hasLeaves(item) &&
    showCondition(item) &&
    loadingPanel
  ) {
    treePanel = loadingPanel(item);
  }

  if (isTreeExpanded && hasLeaves(item)) {
    treePanel = item.nodes.map(node => (
      <Body>
        <Row
          key={node.id}
          item={node}
          treeColumnLevel={treeColumnLevel}
          treeDepthLevel={treeDepthLevel + 1}
          treeExpandType={treeExpandType}
          {...passThrough}
        >
          {recursiveNode => children(recursiveNode)}
        </Row>
      </Body>
    ));
  }

  return {
    name: 'treePlugin',
    theme,
    className,
    onClick,
    tree: {
      treePanel
    }
  };
};

export { useTreeRow };
